import { Card, Title1 } from "@fluentui/react-components";
import { QueueCardStyle } from "./style"
import QueueAddDialog from "../QueueAddDialog"

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