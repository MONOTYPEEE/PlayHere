import LoginComponent from "@/components/Landing/LoginComponent"
import { Center } from "@/styles/center"
import { Home24Filled, Home24Regular, bundleIcon } from "@fluentui/react-icons"

const Home24Bundle = bundleIcon(Home24Filled, Home24Regular)

export default function Join(){
    const centerStyle = Center()

    return(
        <div className={centerStyle.flex}>
            <LoginComponent/>
        </div>
    )
}