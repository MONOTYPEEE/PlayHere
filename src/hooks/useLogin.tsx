import { supabase } from "@/lib/supabaseInit";

interface EmailPasswordType{
    email: string;
    password: string;
}

export default function useLogin(){
    async function asEmail({email,password}:EmailPasswordType) {
        try{
            const { data, error } = await supabase.auth.signInWithPassword({
                email: email,
                password: password,
            })
            if(error) throw error;
            console.log(data)
        }
        catch(error){
            console.log('err')
        }
    }

    return { asEmail };
}