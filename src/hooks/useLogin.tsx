import { supabase } from "@/lib/supabaseInit";
import { AuthError } from "@supabase/supabase-js";
import { useState } from "react";

interface EmailPasswordType{
    email: string;
    password: string;
}

export default function useLogin(){
    const [error, setError] = useState<AuthError>();

    async function asEmail(idPw:EmailPasswordType) {
        try{
            const { data, error } = await supabase.auth.signInWithPassword(idPw);

            if(error){
                setError(error);
            }
        }
        catch(error){
            console.error(error);
        }
    }

    return { asEmail, error };
}