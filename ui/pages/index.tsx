import React, { useState, useEffect } from "react";

import { LogoBlank, LogoTransition } from "@components";

const Main: React.FC = () => {
    useEffect(() => { document.body.style.overflow = "hidden"; });

    const [done, setDone] = useState(false);
    setTimeout(() => setDone(true), 10000);

    return (
        <React.Fragment>
            {!done && <LogoBlank fillBall={true} />}
        </React.Fragment>
    );
};

export default Main;
