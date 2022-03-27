import React, { useState, useEffect } from "react";

import { Header, Hero, LogoBlank } from "@components";
import { ScaleFade } from '@chakra-ui/react'

import { useApi } from "@hooks";
import { useSessionContext } from 'supertokens-auth-react/recipe/session';

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

    return (
        <React.Fragment>
            {!done && <LogoBlank fillText={true} fillBall={true} setDone={setDone} />}
            <ScaleFade initialScale={1.0} in={done} >
                {doesSessionExist || <React.Fragment>
                    <Header />
                    <Hero />
                </React.Fragment>}
                {ping && <p>{ping.data}</p>}
            </ScaleFade>
        </React.Fragment>
    );
};

export default Main;
