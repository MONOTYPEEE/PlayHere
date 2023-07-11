import useTimeDiff from "@/hooks/useTimeDiff";
import useTimeFormat from "@/hooks/useTimeFormat";
import { Subtitle2, Tooltip, makeStyles } from "@fluentui/react-components";
import { Clock20Filled } from "@fluentui/react-icons";

interface TimeDiffBlockType{
    time: string;
}

export default function TimeDiffBlock({time}:TimeDiffBlockType){
    const form = useTimeFormat(time);
    const diff = useTimeDiff(time);
    const style = TimeDiffBlockStyle();

    return(
        <Tooltip relationship="description" content={form} positioning="above-start">
            <div className={style.root}>
                <Clock20Filled/>
                <Subtitle2>
                    {diff}
                </Subtitle2>
            </div>
        </Tooltip>
    )
}

const TimeDiffBlockStyle = makeStyles({
    root:{
        display: 'flex',
        opacity: '50%'
    }
})