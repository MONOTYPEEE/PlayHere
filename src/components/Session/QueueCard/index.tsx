import { Card, Title2 } from "@fluentui/react-components";
import { QueueCardStyle } from "./style"
import QueueAddDialog from "../QueueAddDialog"

export default function QueueCard(){
    const style = QueueCardStyle()

    return(
        <Card>
            <div className={style.e2e}>
                <Title2>재생 대기열</Title2>
                <QueueAddDialog/>
            </div>
        </Card>
    )
}