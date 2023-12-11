import { Card, Title2 } from "@fluentui/react-components";
import { LoginPageCardStyle } from "../LoginPageCard/style";

export default function SignUpPageCard(){
    const style = LoginPageCardStyle();

    return(
        <Card className={style.width}>
            <Title2>가입</Title2>
        </Card>
    )
}