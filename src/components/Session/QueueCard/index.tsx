import { Button, Card, Dialog, DialogActions, DialogBody, DialogContent, DialogSurface, DialogTitle, DialogTrigger, Field, Input, Title1 } from "@fluentui/react-components";
import { QueueCardStyle } from "./style";
import { Add24Filled, Search24Regular, TextBulletListAdd24Regular } from "@fluentui/react-icons";
import { useState } from "react";
import VideoThumb from "../VideoThumb";

export default function QueueCard(){
    const style = QueueCardStyle();
    const [SearchBar,setSearchBar] = useState<string>('');

    return(
        <Card>
            <div className={style.e2e}>
                <Title1>재생 대기열</Title1>
                <Dialog>
                    <DialogTrigger disableButtonEnhancement>
                        <Button icon={<Add24Filled/>} appearance="primary">추가</Button>
                    </DialogTrigger>
                    <DialogSurface>
                        <DialogBody>
                            <DialogTitle >
                                대기열에 추가
                            </DialogTitle>
                            <DialogContent>
                                <Field label='검색어' size="large">
                                    <Input value={SearchBar} onChange={(e)=>setSearchBar(e.target.value)}/>
                                </Field>
                            </DialogContent>
                            <DialogActions>
                                <DialogTrigger disableButtonEnhancement>
                                    <Button>
                                        닫기
                                    </Button>
                                </DialogTrigger>
                            </DialogActions>
                        </DialogBody>
                    </DialogSurface>
                </Dialog>
            </div>
        </Card>
    )
}