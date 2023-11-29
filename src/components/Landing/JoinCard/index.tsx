import { IsLoggedinState } from "@/atoms/LoginAtom"
import { supabase } from "@/util/supabaseInit"
import { Button, Card, Divider, Input, Field, Body2, Title2, makeStyles, tokens, InputOnChangeData, shorthands } from "@fluentui/react-components"
import { AddCircle24Filled, AddCircle24Regular, DoorArrowLeft24Filled, DoorArrowLeft24Regular, PersonCircle24Filled, PersonCircle24Regular, bundleIcon } from "@fluentui/react-icons"
import { useRouter } from "next/router"
import React, { FormEvent, useEffect, useState } from "react"
import { useRecoilState } from "recoil"
import CreateSessionDialog from "../CreateSession"

const DoorArrowLeftBundle = bundleIcon(DoorArrowLeft24Filled, DoorArrowLeft24Regular)
const PersonCircleBundle = bundleIcon(PersonCircle24Filled, PersonCircle24Regular)

export default function JoinCard(){
    const style = Style()
    const router = useRouter()
    const [JoinCode, setJoinCode] = useState<string>('')
    const [IsLoggedIn, setIsLoggedIn] = useRecoilState(IsLoggedinState)
    const [validation, setValidation] = useState<validationType>({ validationState:"none", validationMessage:"" })
    const numberReg = /[0-9]/g

    function ValueChange(ev: React.ChangeEvent<HTMLInputElement>, data:InputOnChangeData){
        setJoinCode(data.value)
    }
    function formSubmit(e:FormEvent){
        e.preventDefault()
        if(!numberReg.test(JoinCode)){
            setValidation({validationMessage: '잘못된 형식이에요', validationState: 'error'})
        }
        else{
            router.push(`/join/${JoinCode}`)
        }
    }

    return(
        <Card className={style.root} size="large">
            <Title2>세션 참가하기</Title2>
            <Body2>제공받은 6자리 숫자로 이루어진 참여 코드를 입력하거나, 브라우저에서 URL을 열어 참가하세요</Body2>
            <form className={style.form} onSubmit={formSubmit} onChange={()=>setValidation({validationMessage: '', validationState: 'none'})}>
                <Field label='참여 코드' size="large" {...validation}>
                    <Input value={JoinCode} onChange={ValueChange}/>
                </Field>
                <Button appearance="primary" type="submit" icon={<DoorArrowLeftBundle/>} size="large" disabled={JoinCode.length!==6}>참여</Button>
            </form>
            <Divider>세션을 생성하려면</Divider>
            {IsLoggedIn ?
                <CreateSessionDialog/>
                :<Button onClick={()=>router.push('/auth/login')} appearance="secondary" icon={<PersonCircleBundle/>}>로그인</Button>
            }
        </Card>
    )
}

const Style = makeStyles({
    root: {
        width: '350px',
        marginTop: tokens.spacingVerticalM
    },
    form:{
        display: 'flex',
        flexDirection:'column',
        ...shorthands.gap(tokens.spacingVerticalL),
    }
})