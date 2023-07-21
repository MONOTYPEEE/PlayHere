import { supabase } from "@/lib/supabaseInit";
import { MenuButton, Menu, MenuItem, MenuList, MenuPopover, MenuTrigger, Persona } from "@fluentui/react-components";
import { SignOut24Filled } from "@fluentui/react-icons";
import { Session } from "@supabase/supabase-js";

interface HeaderUserProfileType{
    data: Session | null | undefined;
}

export default function HeaderUserProfile({data}:HeaderUserProfileType){
    return(
        <Menu>
            <MenuTrigger>
                <MenuButton appearance="subtle" size="small">
                    <Persona name={data?.user.email} textAlignment="center" size="small"/>
                </MenuButton>
            </MenuTrigger>

            <MenuPopover>
                <MenuList>
                    <MenuItem icon={<SignOut24Filled/>}>로그아웃</MenuItem>
                </MenuList>
            </MenuPopover>
        </Menu>
    )
}