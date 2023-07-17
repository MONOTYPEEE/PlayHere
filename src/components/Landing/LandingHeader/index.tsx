import { UrlDirectoryState } from "@/atoms/UrlDirectoryAtom";
import { RecoilState, useRecoilState } from "recoil";
import { Card } from "@fluentui/react-card";
import { Button, Tab, TabList, makeStyles, tokens } from "@fluentui/react-components";
import { Home24Filled, Home24Regular, DocumentOnePageSparkle24Filled, DocumentOnePageSparkle24Regular, bundleIcon, PersonCircle24Filled, PersonCircle24Regular } from "@fluentui/react-icons";
import { useRouter } from "next/router";

const Home24Bundle = bundleIcon(Home24Filled, Home24Regular), DocumentOnePage24Bundle = bundleIcon(DocumentOnePageSparkle24Filled, DocumentOnePageSparkle24Regular);

export default function LandingHeader() {
    const PersonCircleBundle = bundleIcon(PersonCircle24Filled, PersonCircle24Regular);
    const style = Center();
    const route = useRouter();
    const [TabState, setTabState] = useRecoilState<string>(UrlDirectoryState);

    function tabChangeHander(v:string){
        route.push(v);
        setTabState(v);
    }

    return(
        <div className={style.root}>
            <Card appearance="filled" size="small" focusMode="off" role="navigation" orientation="horizontal">
                <TabList appearance="subtle" size="small" defaultSelectedValue="/" selectedValue={TabState} onTabSelect={(e,v)=>(tabChangeHander(v.value as string))}>
                    <Tab value="/" icon={<Home24Bundle/>}>홈</Tab>
                    <Tab value="/blog" icon={<DocumentOnePage24Bundle/>}>블로그</Tab>
                </TabList>
                <Button onClick={()=>tabChangeHander('/auth/login')} appearance="primary" icon={<PersonCircleBundle/>}>로그인</Button>
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
        marginTop: tokens.spacingVerticalS,
    }
})