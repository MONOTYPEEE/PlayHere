import NowPlayingCard from "@/components/join/NowPlayingCard"
import JoinCard from "@/components/join/joinCard"
import { Center } from "@/styles/center"
import { useRouter } from "next/router"
import { useEffect } from "react"

export default function InviteCode(){
    const router = useRouter()
    const centerStyle = Center()

    useEffect(()=>{
        
    },[])

    return(
        <div className={centerStyle.flex} style={{gap: '16px', flexDirection: 'column'}}>
            <JoinCard/>
            <NowPlayingCard/>
        </div>
    )
}