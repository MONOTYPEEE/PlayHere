import { IsLoggedinState } from "@/atoms/LoginAtom"
import { supabase } from "@/lib/supabaseInit"
import { MenuButton, Menu, MenuItem, MenuList, MenuPopover, MenuTrigger, Persona } from "@fluentui/react-components"
import { SignOut24Filled } from "@fluentui/react-icons"
import { Session } from "@supabase/supabase-js"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useRecoilState } from "recoil"

export default function HeaderUserProfile(){
    const router = useRouter()
    const [isLoggedIn,setLoggedIn] = useRecoilState(IsLoggedinState)
    const [AccountData,setAccountData] = useState<Session>()

    function signOutHandler(){
        supabase.auth.signOut()
        supabase.auth.onAuthStateChange((event, session)=>{
            if(event === 'SIGNED_OUT'){
                setLoggedIn(false)
            }
        })
    }

    useEffect(()=>{
        const storedTokenData = localStorage.getItem('sb-grnaqmvtqsslvrivlqob-auth-token')
        if(storedTokenData !== null){
            setAccountData(JSON.parse(storedTokenData))
        }
    },[])

    return(
        <Menu>
            <MenuTrigger>
                <MenuButton appearance="subtle" size="small">
                    <Persona name={AccountData?.user.email} textAlignment="center" size="small"/>
                </MenuButton>
            </MenuTrigger>

            <MenuPopover>
                <MenuList>
                    <MenuItem icon={<SignOut24Filled/>} onClick={signOutHandler}>로그아웃</MenuItem>
                </MenuList>
            </MenuPopover>
        </Menu>
    )
}