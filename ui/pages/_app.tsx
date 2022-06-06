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
import { Favicons } from "@components/icons";

if (typeof window !== 'undefined') {
    SuperTokensReact.init(frontendConfig())
}

function BookingApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <React.StrictMode>
            <ChakraProvider theme={theme}>
                <Provider store={store}>
                    <Favicons initialTitle="Tenniscenter Buchs | Booking" />
                    <Component {...pageProps} />
                </Provider>
            </ChakraProvider>
        </React.StrictMode>
    );
}

export default BookingApp;
