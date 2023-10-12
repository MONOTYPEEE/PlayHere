import { atom } from "recoil";

export const SessionTableAtom = atom<SessionTableType | undefined>({
    key: 'SessionTableAtom',
    default: undefined
})