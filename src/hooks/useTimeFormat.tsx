import dayjs from "dayjs";
import tz from "dayjs/plugin/timezone"
import utc from "dayjs/plugin/utc"
import ko from "dayjs/locale/ko"
import LocalizedFormat from "dayjs/plugin/localizedFormat"

export default function useTimeFormat(time:string){
    dayjs.extend(tz);
    dayjs.extend(utc);
    dayjs.extend(LocalizedFormat);

    return dayjs(time).tz("Asia/Seoul").locale(ko).format('LLLL');
}