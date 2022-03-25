import React, { useState, useEffect } from "react";

import { Header, Hero, LogoBlank, LogoTransition } from "@components";
import { ScaleFade } from '@chakra-ui/react'

import { useApi } from "@hooks";
import { useSessionContext } from 'supertokens-auth-react/recipe/session';

import { Authenticator } from "@security";

const Main: React.FC = () => {
    const [done, setDone] = useState(false);

    const [api] = useApi();

    const [ping, setPing] = useState<any>(null);

    const { doesSessionExist } = useSessionContext();

    useEffect(() => {
        if (doesSessionExist && !ping) {
            const getPing = async () => {
                try {
                    setPing(await api.get("secure/pong"));
                } catch (e: any) {
                    console.error(e);
                }
            };
            getPing();
        }
    }, [api, ping, done, doesSessionExist]);

    if (!done) {
        return (
            <LogoBlank fillText={true} fillBall={true} setDone={setDone} />
        );
    }

    return (
        <ScaleFade initialScale={1.0} in={done} >
            {doesSessionExist || <React.Fragment>
                <Header />
                <Hero />
            </React.Fragment>}
            {ping && <p>{ping.data}</p>}
        </ScaleFade>
    );
};

export default Main;
