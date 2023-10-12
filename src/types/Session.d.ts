declare interface SessionTableType {
    hostUUID: string
    id: string
    inviteCode: string
    isPlaying: boolean
    nowPlaying: Json | null
    queue: Json[] | null
    title: string
}