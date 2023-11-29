import { Button, Card, Field, ProgressBar, Spinner, Title2 } from "@fluentui/react-components";
import { useRecoilState } from "recoil";
import { SessionTableAtom } from "@/atoms/SessionTableAtom";
import { ControllerCardStyle } from "./style";
import { Next24Filled, Next24Regular, Pause24Filled, Pause24Regular, Play24Filled, Play24Regular, bundleIcon } from "@fluentui/react-icons";
import VideoThumb from "../VideoThumb";
import { supabase } from "@/util/supabaseInit";
import { useRouter } from "next/router";
import ReactPlayer from "react-player";
import { IsHostState } from "@/atoms/IsHostAtom";
import { useEffect, useState } from "react";
import secondHandler from "@/util/secondHandler";

const Pause24Bundle = bundleIcon(Pause24Filled, Pause24Regular)
const Play24Bundle = bundleIcon(Play24Filled, Play24Regular)
const Next24Bundle = bundleIcon(Next24Filled, Next24Regular)

export default function ControllerCard(){
    const style = ControllerCardStyle()
    const router = useRouter()
    const [SessionData, setSessionData] = useRecoilState(SessionTableAtom)
    const [isHost, setIsHost] = useRecoilState(IsHostState)
    const [videoProgress, setVideoProgress] = useState<YouTubeProgress>()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    
    function PausePlayHander(){
        setIsLoading(true)
        supabase
            .from('session')
            .update({isPlaying: !SessionData?.isPlaying})
            .eq('id', router.query.id)
            .then((d)=>{
                if(!d.error){
                    setIsLoading(false)
                }
            })
    }

    function SkipHandler(){
        if(SessionData?.queue?.length === 0 && SessionData?.nowPlaying){
            supabase
                .from('session')
                .update({nowPlaying: null})
                .eq('id', router.query.id)
                .then(()=>console.log('Skipping, null'))
        }
        else if(SessionData?.queue){
            supabase
                .from('session')
                .update({nowPlaying: SessionData?.queue[0], queue: SessionData.queue.slice(1)})
                .eq('id', router.query.id)
                .then(()=>console.log('Skipping'))
        }
    }

    async function CheckIsHost(){
        const getUser = await supabase.auth.getUser()
        
        if(SessionData?.hostUUID === getUser.data.user?.id && SessionData?.hostUUID !== undefined){
            setIsHost(true)
        }
    }

    useEffect(()=>{
        if(router.isReady){
            CheckIsHost()
        }
    },[router.isReady, SessionData])

    return(
        <>
        {SessionData && isHost && <ReactPlayer
            onEnded={SkipHandler}
            url={'https://youtube.com/watch?v='+SessionData?.nowPlaying?.id.videoId}
            playing={SessionData?.isPlaying}
            height={1} width={1}
            onProgress={(e)=>setVideoProgress(e)}
        />}
        <Card>
            <Title2>지금 재생 중</Title2>
            <VideoThumb data={SessionData?.nowPlaying}/>
            <Field label={secondHandler(videoProgress)}>
                <ProgressBar value={videoProgress?.played}/>
            </Field>
            <div className={style.buttonContainer}>
                {SessionData?.isPlaying ?
                    <Button appearance="primary" size="large" icon={<Pause24Bundle/>} onClick={PausePlayHander} disabled={isLoading}>{isLoading ? <Spinner size="tiny"/> : '일시정지'}</Button>
                    : <Button appearance="primary" size="large" icon={<Play24Bundle/>} onClick={PausePlayHander} disabled={isLoading}>{isLoading ? <Spinner size="tiny"/> : '재생'}</Button>
                }
                <Button appearance="subtle" size="large" icon={<Next24Bundle/>} onClick={SkipHandler}>건너뛰기</Button>
                <Button onClick={()=>console.log(SessionData)}>콘솔로그하세요</Button>
            </div>
        </Card>
        </>
    )
}