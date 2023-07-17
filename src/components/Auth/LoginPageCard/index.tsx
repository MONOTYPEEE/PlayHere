import { Card, Label, Title2, Input, Button } from "@fluentui/react-components";
import { ArrowLeft20Filled, PersonCircle28Filled, PersonCircle28Regular, bundleIcon } from "@fluentui/react-icons";
import { useState } from "react";
import { LoginPageCardStyle } from "./style";
import { useRouter } from "next/router";

const PersonCircle28Bundle = bundleIcon(PersonCircle28Filled, PersonCircle28Regular)

export default function LoginPageCard(){
    const [FormData,setFormData] = useState({id:'',pw:''});
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
                <Label htmlFor="IdInput" size="large">
                    아이디
                </Label>
                <Input id="IdInput" size="large" name="id" value={FormData.id} onChange={ValueChange}/>
                <Label htmlFor="PasswordInput" size="large">
                    비밀번호
                </Label>
                <Input id="PasswordInput" size="large" name="pw" value={FormData.pw} onChange={ValueChange} type="password"/>
                
                <Button type="submit" appearance="primary" size="large" icon={<PersonCircle28Bundle/>}>
                    로그인
                </Button>
            </form>
        </Card>
    )
}