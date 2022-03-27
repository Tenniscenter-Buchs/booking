import React from "react";
import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@definitions/chakra/theme";
import "@styles/global.css";
import { Provider } from "react-redux";
import store from "@redux/store";
import { appWithTranslation } from "@i18n";

import SuperTokensReact from 'supertokens-auth-react'

import { frontendConfig } from '../config/frontendConfig'

if (typeof window !== 'undefined') {
    SuperTokensReact.init(frontendConfig())
}

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <React.StrictMode>
            <ChakraProvider theme={theme}>
                <Provider store={store}>
                    <Component {...pageProps} />
                </Provider>
            </ChakraProvider>
        </React.StrictMode>
    );
}

export default MyApp;
