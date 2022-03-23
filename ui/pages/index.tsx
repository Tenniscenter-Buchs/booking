import React, { useState, useEffect } from "react";

import { Header, Hero, LogoBlank, LogoTransition } from "@components";
import { ScaleFade } from '@chakra-ui/react'

import { useApi } from "@hooks";

import { Authenticator } from "@security";

const Main: React.FC = () => {
    const [done, setDone] = useState(false);

    const api = useApi();

    if (!done) {
        return (
            <LogoBlank fillText={true} fillBall={true} setDone={setDone} />
        );
    }

    return (
        <Authenticator>
            <ScaleFade initialScale={1.0} in={done} >
                <Header />
                <Hero />
                <a href={"http://" + api}>{api}</a>
            </ScaleFade>
        </Authenticator>
    );
};

export default Main;
