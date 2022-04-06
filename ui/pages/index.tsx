import React, { useState, useEffect } from "react";

import { LogoBlank } from "@components";
import { ScaleFade } from '@chakra-ui/react'

import { useLoginStatus, useWasmModule } from "@hooks";

import Router from 'next/router'
import dynamic from "next/dynamic";

import { Header } from "@components/headers";

import type { Hero as HeroType } from "@components/heros";
const Hero = dynamic(() =>
    import("@components/heros").then((lib) => lib.Hero as any)
) as typeof HeroType;

const Main: React.FC = () => {
    const [done, setDone] = useState(false);

    const loggedIn = useLoginStatus();
    const wasm = useWasmModule("pdf-renderer-d3psi");

    useEffect(() => {
        if (loggedIn) {
            Router.push("/dashboard");
        }
    }, [loggedIn]);

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
