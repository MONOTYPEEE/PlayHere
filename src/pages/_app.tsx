import '@/styles/global.css'
import { BrandVariants, FluentProvider, createDarkTheme, createLightTheme, webLightTheme } from '@fluentui/react-components'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'

const PlayHereRamp: BrandVariants = { 
    10: "#020205",
    20: "#151524",
    30: "#21223F",
    40: "#2B2C56",
    50: "#36376D",
    60: "#424185",
    70: "#504C9D",
    80: "#5E57B5",
    90: "#6E63CD",
    100: "#7F6EE3",
    110: "#917AF8",
    120: "#A489FF",
    130: "#B599FF",
    140: "#C5AAFF",
    150: "#D4BCFF",
    160: "#E1CDFF"
};

const PlayHereLight = createLightTheme(PlayHereRamp);
const PlayHereDark = createDarkTheme(PlayHereRamp);

export default function App({ Component, pageProps }: AppProps) {
    
    return (
        <FluentProvider theme={PlayHereLight}>
            <RecoilRoot>
                <Component {...pageProps} />
            </RecoilRoot>
        </FluentProvider>
    )
}
