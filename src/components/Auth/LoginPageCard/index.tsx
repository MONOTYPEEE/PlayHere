import { Card, Label, Title2, Input, Button } from "@fluentui/react-components";
import { PersonCircle28Filled, PersonCircle28Regular, bundleIcon } from "@fluentui/react-icons";
import { useState } from "react";

const PersonCircle28Bundle = bundleIcon(PersonCircle28Filled, PersonCircle28Regular)

export default function LoginPageCard(){
    const [FormData,setFormData] = useState({id:'',pw:''});

    function ValueChange(e:React.ChangeEvent<HTMLInputElement>){
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    return(
        <Card>
            <Title2>로그인</Title2>
            <form>
                <Label size="large">
                    아이디
                    <Input size="large" name="id" value={FormData.id} onChange={ValueChange}/>
                </Label>
                <Label size="large">
                    비밀번호
                    <Input size="large" name="pw" value={FormData.pw} onChange={ValueChange} type="password"/>
                </Label>
                <Button appearance="primary" size="large" icon={<PersonCircle28Bundle/>}>
                    로그인
                </Button>
            </form>
        </Card>
    )
}