import { Center } from "@/styles/center"
import { Button, Title1, Subtitle2 } from "@fluentui/react-components"
import { Home24Filled, Home24Regular, bundleIcon } from "@fluentui/react-icons"
import { useRouter } from "next/router"

const Home24Bundle = bundleIcon(Home24Filled,Home24Regular)

export default function NotFound(){
    const router = useRouter()
    const centerStyle = Center()

    return(
        <div className={centerStyle.flex} style={{flexDirection:'column', gap:'20px'}}>
            <Title1>
                페이지를 찾을 수 없음
            </Title1>
            <Subtitle2 style={{opacity:'0.5'}}>
                404 Not Found
            </Subtitle2>
            <Button appearance="primary" icon={<Home24Bundle/>} onClick={()=>router.push('/')}>
                홈으로 돌아가기
            </Button>
        </div>
    )
}