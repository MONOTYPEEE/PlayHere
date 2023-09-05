import QueueCard from "@/components/Session/QueueCard"
import { Center } from "@/styles/center"
import { useRouter } from "next/router"

export default function InsideSession(){
    const CenterStyle = Center()

    return(
        <div className={CenterStyle.flex}>
            <div style={{width:'900px'}}>
                <QueueCard/>
            </div>
        </div>
    )
}
//TODO
//- 큐 전송 realtime 관련 코드
//- 사용자 목록 realtime 로직
//- /join 디렉토리
//- Owner 구분 로직