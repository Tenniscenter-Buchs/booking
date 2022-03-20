import React, { useState, useEffect } from "react";

import { Header, Hero, LogoBlank, LogoTransition } from "@components";
import { ScaleFade } from '@chakra-ui/react'

const Main: React.FC = () => {
    const [done, setDone] = useState(false);

    let apiHost: string = typeof window !== 'undefined' && window.location.hostname ? window.location.hostname : "";
    if (process.env.NEXT_PUBLIC_REVIEW_APP) {    // Heroku Review Apps
        apiHost = apiHost.replace("booking-ui", "booking-api");
    } else if (typeof window !== 'undefined' && window.location.hostname === 'localhost') { // Local integration testing
        apiHost = "localhost:5000";
    } else {
        if (process.env.NEXT_PUBLIC_API_HOST) {
            apiHost = process.env.NEXT_PUBLIC_API_HOST;
        } else {
            return <p>An error occurred reading API HOST domain from environment</p>
        }
    }

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
