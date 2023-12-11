import SignUpPageCard from "@/components/Auth/SignUpPageCard";
import { Center } from "@/styles/center";

export default function SignUp(){
    const style = Center();
    
    return(
        <div className={style.flex}>
            <div>
                <SignUpPageCard/>
            </div>
        </div>
    )
}