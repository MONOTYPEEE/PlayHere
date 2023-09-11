import JoinCard from "../joinCard"
import NowPlayingCard from "../NowPlayingCard"

interface CardStackType{
    isOpen: boolean
    nowPlaying: YouTubeVideoItem;
}

export default function CardStack({isOpen, nowPlaying}:CardStackType){
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