import { atom } from "recoil";

export const PlaylistQueue = atom<YouTubeVideoItem[]>({
    key: 'PlaylistQueue',
    default: []
})