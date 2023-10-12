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