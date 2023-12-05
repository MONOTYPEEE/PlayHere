declare interface SessionTableType {
    hostUUID: string
    id: string
    inviteCode: string
    isPlaying: boolean
    nowPlaying: YouTubeVideoItem | null
    queue: YouTubeVideoItem[] | null
    title: string
}