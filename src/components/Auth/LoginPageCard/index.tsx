import { Card, Field, Title2, Input, Button } from "@fluentui/react-components";
import { ArrowLeft20Filled, PersonCircle28Filled, PersonCircle28Regular, bundleIcon } from "@fluentui/react-icons";
import React, { FormEvent, useState } from "react";
import { LoginPageCardStyle } from "./style";
import { useRouter } from "next/router";
import { supabase } from "@/util/supabaseInit";

const PersonCircle28Bundle = bundleIcon(PersonCircle28Filled, PersonCircle28Regular)

export default function LoginPageCard(){
    const [FormData,setFormData] = useState({email:'',password:''});
    const [emailError, setEmailError] = useState<string>('');
    const [PasswordError, setPasswordError] = useState<string>('');
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
    function FormDataVaildation(){
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]+$/;
        setEmailError('');
        setPasswordError('');
        if(!emailRegex.test(FormData.email)){
            setEmailError('이메일 형식이 올바르지 않습니다');
            return false;
        }
        if(FormData.password.length < 8){
            setPasswordError('비밀번호는 최소 8자리여야 합니다');
            return false;
        }
        else return true;
    }
    function loginRequest(e:FormEvent<HTMLFormElement>){
        e.preventDefault();
        if(FormDataVaildation()){
            supabase.auth.signInWithPassword(FormData)
                .then(({data,error})=>{
                    if(error) setPasswordError(error?.message);
                })
            supabase.auth.onAuthStateChange((event, session) => {
                if(event==='SIGNED_IN'){
                    changeDir('/');
                }
            })
        }
    }

    return(
        <Card className={style.width}>
            <Button icon={<ArrowLeft20Filled/>} appearance="transparent" onClick={()=> changeDir('/')}>
                홈으로 돌아가기
            </Button>
            <Title2>로그인</Title2>
            <form className={style.flex} onSubmit={loginRequest}>
                <Field size="large" label='이메일' validationState={emailError ? 'error' : undefined} validationMessage={emailError}>
                    <Input size="large" name="email" value={FormData.email} onChange={ValueChange}/>
                </Field>
                <Field size="large" label='비밀번호' validationState={PasswordError ? 'error' : undefined} validationMessage={PasswordError}>
                    <Input size="large" name="password" value={FormData.password} onChange={ValueChange} type="password"/>
                </Field>
                
                <Button type="submit" appearance="primary" size="large" icon={<PersonCircle28Bundle/>}>
                    로그인
                </Button>
            </form>
            <div className={style.hzFlex}>
                <Button appearance="subtle">회원가입</Button>
                <Button appearance="subtle">비밀번호 재설정</Button>
            </div>
        </Card>
    )
}