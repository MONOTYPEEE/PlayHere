import '@/styles/globals.css'
import { FluentProvider, webLightTheme } from '@fluentui/react-components'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <FluentProvider theme={webLightTheme}>
            <RecoilRoot>
                <Component {...pageProps} />
            </RecoilRoot>
        </FluentProvider>
    )
}
