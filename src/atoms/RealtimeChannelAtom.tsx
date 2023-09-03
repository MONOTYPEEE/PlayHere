import { RealtimeChannel } from "@supabase/supabase-js";
import { atom } from "recoil";

export const RealtimeChannelAtom = atom<RealtimeChannel | undefined>({
    key: 'RealtimeChannel',
    default: undefined
})