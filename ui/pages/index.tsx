import React, { useState, useEffect } from "react";

import dynamic from 'next/dynamic'

import { Header, Hero, LogoBlank, LogoTransition } from "@components";
import { ScaleFade } from '@chakra-ui/react'
import ThirdPartyEmailPassword from 'supertokens-auth-react/recipe/thirdpartyemailpassword'

import { useApi } from "@hooks";

const ThirdPartyEmailPasswordAuthNoSSR = dynamic(
    new Promise((res) =>
        res(ThirdPartyEmailPassword.ThirdPartyEmailPasswordAuth)
    ) as any,
    { ssr: false }
)

const Main: React.FC = () => {
    const [done, setDone] = useState(false);

    const api = useApi();

    if (!done) {
        return (
            <LogoBlank fillText={true} fillBall={true} setDone={setDone} />
        );
    }

    return (
        <ThirdPartyEmailPasswordAuthNoSSR>
            <ScaleFade initialScale={1.0} in={done} >
                <Header />
                <Hero />
                <a href={"http://" + api}>{api}</a>
            </ScaleFade>
        </ThirdPartyEmailPasswordAuthNoSSR>
    );
};

export default Main;
