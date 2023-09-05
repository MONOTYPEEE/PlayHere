import { RealtimeChannel } from "@supabase/supabase-js";
import { atom } from "recoil";

export const ChannelIDAtom = atom<string>({
    key: 'ChannelID',
})