import { Button, Card, Dialog, DialogActions, DialogBody, DialogContent, DialogSurface, DialogTitle, DialogTrigger, Field, Input, Title1 } from "@fluentui/react-components";
import { QueueCardStyle } from "./style";
import { Add24Filled } from "@fluentui/react-icons";
import { KeyboardEventHandler, useState } from "react";
import VideoThumb from "../VideoThumb";
import QueueAddDialog from "../QueueAddDialog";

export default function QueueCard(){
    const style = QueueCardStyle()

    return(
        <Card>
            <div className={style.e2e}>
                <Title1>재생 대기열</Title1>
                <QueueAddDialog/>
            </div>
        </Card>
    )
}