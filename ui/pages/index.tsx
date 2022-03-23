import React, { useState, useEffect } from "react";

import { Header, Hero, LogoBlank, LogoTransition } from "@components";
import { ScaleFade } from '@chakra-ui/react'

import { useApi } from "@hooks";

import { Authenticator } from "@security";

const Main: React.FC = () => {
    const [done, setDone] = useState(false);

    const [api] = useApi();

    const [ping, setPing] = useState<any>(null);

    useEffect(() => {
        if (!ping) {
            const getPing = async () => {
                try {
                    setPing(await api.get("secure/pong"));
                } catch (e: any) {
                    console.error(e);
                }
            };
            getPing();
        }
    }, [api, ping, done]);

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
                {ping && <p>{ping.data}</p>}
            </ScaleFade>
        </Authenticator>
    );
};

export default Main;
