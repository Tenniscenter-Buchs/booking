import React, { useState, useEffect } from "react";

import { Header, Hero, LogoBlank, LogoTransition } from "@components";
import { ScaleFade } from '@chakra-ui/react'

const Main: React.FC = () => {
    const [done, setDone] = useState(false);

    if (!done) {
        return <LogoBlank fillText={true} fillBall={true} setDone={setDone} />;
    }

    return (
        <React.Fragment>
            <ScaleFade initialScale={1.0} in={done} >
                <Header />
                <Hero />
            </ScaleFade>
        </React.Fragment>
    );
};

export default Main;
