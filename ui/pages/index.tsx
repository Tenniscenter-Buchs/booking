import React, { useState, useEffect } from "react";

import { Header, Hero, LogoBlank, LogoTransition } from "@components";
import { ScaleFade } from '@chakra-ui/react'

const Main: React.FC = () => {
    let apiHost: string = typeof window !== 'undefined' && window.location.hostname ? window.location.hostname : "";
    if (process.env.NEXT_PUBLIC_REVIEW_APP) {
        apiHost = apiHost.replace("booking-ui", "booking-api");
    } else if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
        apiHost = "localhost:5000";
    } else {
        apiHost = "api." + apiHost;
    }

    const [done, setDone] = useState(false);

    if (!done) {
        return <LogoBlank fillText={true} fillBall={true} setDone={setDone} />;
    }

    return (
        <React.Fragment>
            <ScaleFade initialScale={1.0} in={done} >
                <Header />
                <Hero />
                <a href={"http://" + apiHost}>{apiHost}</a>
            </ScaleFade>
        </React.Fragment>
    );
};

export default Main;
