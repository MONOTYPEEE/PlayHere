import { IsLoggedinState } from "@/atoms/LoginAtom"
import { supabase } from "@/util/supabaseInit"
import { MenuButton, Menu, MenuItem, MenuList, MenuPopover, MenuTrigger, Persona, Portal } from "@fluentui/react-components"
import { SignOut24Filled } from "@fluentui/react-icons"
import { Session } from "@supabase/supabase-js"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useRecoilState } from "recoil"
import SignOutDialog from "../SignOutDialog"

export default function HeaderUserProfile(){
    const router = useRouter()
    const [isDialogOpen,setDialogOpen] = useState<boolean>(false)

    const [AccountData,setAccountData] = useState<Session>()

    useEffect(()=>{
        const storedTokenData = localStorage.getItem('sb-grnaqmvtqsslvrivlqob-auth-token')
        if(storedTokenData !== null){
            setAccountData(JSON.parse(storedTokenData))
        }
    },[])

    return(
        <>
            <Menu>
                <MenuTrigger>
                    <MenuButton appearance="subtle" size="small">
                        <Persona name={AccountData?.user.email} textAlignment="center" size="small"/>
                    </MenuButton>
                </MenuTrigger>

                <MenuPopover>
                    <MenuList>
                        <MenuItem icon={<SignOut24Filled/>} onClick={()=>setDialogOpen(true)}>로그아웃</MenuItem>
                    </MenuList>
                </MenuPopover>
            </Menu>
            <Portal>
                <SignOutDialog setState={setDialogOpen} state={isDialogOpen}/>
            </Portal>
        </>
    )
}