import { Card } from "@fluentui/react-card";
import { Button, Tab, TabList, makeStyles } from "@fluentui/react-components";
import { Home24Filled, Home24Regular, bundleIcon } from "@fluentui/react-icons";

const Home24Bundle = bundleIcon(Home24Filled, Home24Regular);

export default function LandingHeader() {
    const style = Center()

    return(
        <div className={style.root}>
            <Card appearance="filled" size="small" focusMode="off" role="navigation" orientation="horizontal">
                <TabList appearance="subtle" size="small" >
                    <Tab value="1" icon={<Home24Bundle/>} />
                    <Tab value="2">서비스 소개</Tab>
                    <Tab value="3">공지사항</Tab>
                </TabList>
                <Button appearance="primary">로그인</Button>
            </Card>
        </div>
    )
}

const Center = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center'
    }
})