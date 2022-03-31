import React, { useState, useEffect } from "react";

import { Header, Hero, LogoBlank } from "@components";
import { ScaleFade } from '@chakra-ui/react'

import { useLoginStatus } from "@hooks";

import Router from 'next/router'

const Main: React.FC = () => {
    const [done, setDone] = useState(false);

    const loggedIn = useLoginStatus();

    useEffect(() => {
        if (loggedIn) {
            Router.push("/dashboard");
        }
    });

    return (
        <React.Fragment>
            {done || <LogoBlank fillText={true} fillBall={true} setDone={setDone} />}
            <ScaleFade initialScale={1.0} in={done} >
                <React.Fragment>
                    <Header showGithubButton={true} />
                    <Hero />
                </React.Fragment>
            </ScaleFade>
        </React.Fragment>
    );
};

export default Main;
