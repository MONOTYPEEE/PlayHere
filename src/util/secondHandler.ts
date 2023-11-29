export default function secondHandler(time:YouTubeProgress | undefined){
    if(time){
        const playedFloor = Math.floor(time.playedSeconds)
        const playedMinute = Math.floor(playedFloor / 60)
        const playedSecond = playedFloor - playedMinute * 60

        const videoFloor = Math.floor(time.playedSeconds / time.played)
        const videoMinute = Math.floor(videoFloor / 60)
        const videoSecond = videoFloor - videoMinute * 60

        return `${String(playedMinute).padStart(2, '0')}:${String(playedSecond).padStart(2, '0')} / ${videoMinute}:${videoSecond}`
    }
    return '00:00 / 00:00'
}