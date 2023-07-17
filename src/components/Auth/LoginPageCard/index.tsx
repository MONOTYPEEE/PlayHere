import { Card, Field, Title2, Input, Button } from "@fluentui/react-components";
import { ArrowLeft20Filled, PersonCircle28Filled, PersonCircle28Regular, bundleIcon } from "@fluentui/react-icons";
import { useState } from "react";
import { LoginPageCardStyle } from "./style";
import { useRouter } from "next/router";

const PersonCircle28Bundle = bundleIcon(PersonCircle28Filled, PersonCircle28Regular)

export default function LoginPageCard(){
    const [FormData,setFormData] = useState({email:'',password:''});
    const style = LoginPageCardStyle();
    const router = useRouter();

    function ValueChange(e:React.ChangeEvent<HTMLInputElement>){
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }
    function changeDir(v:string){
        router.push(v);
    }

    return(
        <Card className={style.width}>
            <Button icon={<ArrowLeft20Filled/>} appearance="transparent" onClick={()=> changeDir('/')}>
                홈으로 돌아가기
            </Button>
            <Title2>로그인</Title2>
            <form className={style.flex}>
                <Field size="large" label='이메일'>
                    <Input size="large" name="email" value={FormData.email} onChange={ValueChange}/>
                </Field>
                <Field size="large" label='비밀번호'>
                    <Input size="large" name="password" value={FormData.password} onChange={ValueChange} type="password"/>
                </Field>
                
                <Button type="submit" appearance="primary" size="large" icon={<PersonCircle28Bundle/>}>
                    로그인
                </Button>
            </form>
        </Card>
    )
}