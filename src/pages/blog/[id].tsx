import LandingHeader from "@/components/Landing/LandingHeader";
import { useRouter } from "next/router"

export default function BlogPost(){
    const r = useRouter();

    return(
        <>
            <LandingHeader/>
        </>
    )
}