import { LandingTabState } from "@/atoms/LandingAtom";
import { useRecoilState } from "recoil";
import { Card } from "@fluentui/react-card";
import { Button, Tab, TabList, makeStyles } from "@fluentui/react-components";
import { Home24Filled, Home24Regular, DocumentOnePageSparkle24Filled, DocumentOnePageSparkle24Regular, bundleIcon } from "@fluentui/react-icons";

const Home24Bundle = bundleIcon(Home24Filled, Home24Regular), DocumentOnePage24Bundle = bundleIcon(DocumentOnePageSparkle24Filled, DocumentOnePageSparkle24Regular);

export default function LandingHeader() {
    const style = Center();
    const [TabState, setTabState] = useRecoilState<string>(LandingTabState);

    return(
        <div className={style.root}>
            <Card appearance="filled" size="small" focusMode="off" role="navigation" orientation="horizontal">
                <TabList appearance="subtle" size="small" defaultSelectedValue="1" selectedValue={TabState} onTabSelect={(e,v)=>(setTabState(v.value as string))}>
                    <Tab value="1" icon={<Home24Bundle/>}>홈</Tab>
                    <Tab value="2" icon={<DocumentOnePage24Bundle/>}>블로그</Tab>
                </TabList>
                <Button appearance="primary">로그인</Button>
            </Card>
        </div>
    )
}

const Center = makeStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        position: 'absolute',
        width: '100vw',
    }
})