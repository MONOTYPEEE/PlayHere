import useTimeDiff from "@/hooks/useTimeDiff";
import useTimeFormat from "@/hooks/useTimeFormat";
import { Subtitle2, Tooltip, makeStyles, shorthands } from "@fluentui/react-components";
import { Clock20Filled } from "@fluentui/react-icons";

interface TimeDiffBlockType{
    time: string;
    transparent?: boolean;
}

export default function TimeDiffBlock({time, transparent = false}:TimeDiffBlockType){
    const form = useTimeFormat(time);
    const diff = useTimeDiff(time);
    const style = TimeDiffBlockStyle();

    return(
        <Tooltip relationship="description" content={form} positioning="above-start">
            <div className={style.root} style={{opacity: transparent ? '50%' : '100%'}}>
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
        ...shorthands.gap('4px'),
    }
})