import { supabase } from "@/lib/supabaseInit";
import { Persona } from "@fluentui/react-components";
import { Session } from "@supabase/supabase-js";

interface HeaderUserProfileType{
    data: Session | null | undefined;
}

export default function HeaderUserProfile({data}:HeaderUserProfileType){
    console.log(data)
    return(
        <Persona name={data?.user.email} textAlignment="center"/>
    )
}