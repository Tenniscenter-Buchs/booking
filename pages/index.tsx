import React, { useState, useEffect } from "react";

import { Header, Hero, LogoBlank, LogoTransition } from "@components";
import { ScaleFade } from '@chakra-ui/react'

const Main: React.FC = () => {
    useEffect(() => { document.body.style.overflow = "hidden"; });

    const [done, setDone] = useState(false);

    return (
        <React.Fragment>
            {!done && <LogoBlank fillText={true} fillBall={true} setDone={setDone} />}
            <ScaleFade initialScale={1.0} in={done} >
                <Header />
                <Hero />
            </ScaleFade>
        </React.Fragment>
    );
};

export default Main;
