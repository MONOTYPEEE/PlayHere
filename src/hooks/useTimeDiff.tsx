import dayjs from "dayjs";
import tz from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc"
import ko from "dayjs/locale/ko";
import relativeTime from "dayjs/plugin/relativeTime";

export default function useTimeDiff(time:string){
    dayjs.extend(tz);
    dayjs.extend(utc);
    dayjs.extend(relativeTime);

    return dayjs(time).tz("Asia/Seoul").locale(ko).fromNow()
}