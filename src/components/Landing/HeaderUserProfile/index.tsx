import { supabase } from "@/lib/supabaseInit";
import { Persona } from "@fluentui/react-components";

export default function HeaderUserProfile(){
    return(
        <Persona name="시발" textAlignment="center"/>
    )
}