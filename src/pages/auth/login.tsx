import LoginPageCard from "@/components/Auth/LoginPageCard";
import { Center } from "@/styles/center";

export default function Login(){
    const style = Center();

    return(
        <div className={style.flex}>
            <LoginPageCard/>
        </div>
    )
}