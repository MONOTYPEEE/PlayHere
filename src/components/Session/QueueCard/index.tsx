import { Button, Card, Dialog, DialogActions, DialogBody, DialogContent, DialogSurface, DialogTitle, DialogTrigger, Field, Input, Title1 } from "@fluentui/react-components";
import { QueueCardStyle } from "./style";
import { Add24Filled } from "@fluentui/react-icons";
import { KeyboardEventHandler, useState } from "react";
import VideoThumb from "../VideoThumb";

export default function QueueCard(){
    const style = QueueCardStyle()
    const [SearchBar,setSearchBar] = useState<string>('')
    const [SearchResult, setSearchResult] = useState<YoutubeResponse>()

    function YouTubeSearch(event){
        if(event.key === 'Enter'){
            fetch(`https://youtube.googleapis.com/youtube/v3/search?part=id%2Csnippet&q=${SearchBar}&type=video&key=${process.env.NEXT_PUBLIC_GOOGLE}`)
            .then(response => {
                return response.json()
            })
            .then(data => {
                console.log(data)
                setSearchResult(data)
            })
        }
    }

    return(
        <Card>
            <div className={style.e2e}>
                <Title1>재생 대기열</Title1>
                <Dialog>
                    <DialogTrigger disableButtonEnhancement>
                        <Button icon={<Add24Filled/>} appearance="primary">추가</Button>
                    </DialogTrigger>
                    <DialogSurface>
                        <DialogBody>
                            <DialogTitle >
                                대기열에 추가
                            </DialogTitle>
                            <DialogContent>
                                <Field label='검색어' size="large">
                                    <Input value={SearchBar} onChange={(e)=>setSearchBar(e.target.value)} onKeyDown={YouTubeSearch}/>
                                </Field>
                                {SearchResult && SearchResult.items.map((d)=>{
                                    return <VideoThumb data={d} key={d.id.videoId}/>
                                })}
                            </DialogContent>
                            <DialogActions>
                                <DialogTrigger disableButtonEnhancement>
                                    <Button>
                                        닫기
                                    </Button>
                                </DialogTrigger>
                            </DialogActions>
                        </DialogBody>
                    </DialogSurface>
                </Dialog>
            </div>
        </Card>
    )
}