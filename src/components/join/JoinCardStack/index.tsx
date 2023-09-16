import JoinCard from "../joinCard"
import NowPlayingCard from "../NowPlayingCard"

interface JoinCardStackType{
    isOpen: boolean
    nowPlaying: YouTubeVideoItem;
}

export default function JoinCardStack({isOpen, nowPlaying}:JoinCardStackType){
    if(!isOpen){
        return(
            <div>
                <JoinCard/>
                <NowPlayingCard data={nowPlaying}/>
            </div>
        )
    }
    else{
        return null
    }
}