import { atom } from "recoil";

export const IsHostState = atom<boolean>({
    key: 'IsHostState',
    default: false,
})