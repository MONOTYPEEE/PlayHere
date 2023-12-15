import { Button, Card, Field, Input, Title2 } from '@fluentui/react-components'
import { LoginPageCardStyle } from '../LoginPageCard/style'
import { ArrowLeft20Filled, PersonAdd24Filled, PersonAdd24Regular, bundleIcon } from '@fluentui/react-icons'
import { useRouter } from 'next/router'
import { FormEvent, useState } from 'react'
import { supabase } from '@/util/supabaseInit'

const PersonAdd24Bundle = bundleIcon(PersonAdd24Filled, PersonAdd24Regular)

export default function SignUpPageCard(){
    const router = useRouter()
    const style = LoginPageCardStyle()
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    function changeState({target: { name, value }}: React.ChangeEvent<HTMLInputElement>){
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }
    function submitSignUp(e:FormEvent){
        e.preventDefault()
        supabase
            .auth
            .signUp(formData)
            .then(({data,error})=>{
                console.log(data)
            })
    }

    return(
        <Card className={style.width}>
            <Button icon={<ArrowLeft20Filled/>} appearance='transparent' onClick={()=>router.push('/auth/login')}>로그인</Button>
            <Title2>가입</Title2>
            <form className={style.flex} onSubmit={submitSignUp}>
                <Field label='이메일'>
                    <Input name='email' onChange={changeState} value={formData.email}/>
                </Field>
                <Field label='비밀번호'>
                    <Input name='password' type='password' onChange={changeState} value={formData.password}/>
                </Field>
                <Button type='submit' appearance='primary' icon={<PersonAdd24Bundle/>} disabled={formData.email === '' && formData.password === ''}>계정 만들기</Button>
            </form>
        </Card>
    )
}