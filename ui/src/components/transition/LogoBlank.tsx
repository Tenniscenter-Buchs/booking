import { LogoTransition } from "./LogoTransition";

export const LogoBlank = ({animationTime, fillText, fillBall, setDone}: {
    animationTime?: number, fillText?: boolean, fillBall?: boolean, setDone: Function
}) => {
    if (!animationTime) {
        animationTime = 3000;
    }
    return <LogoTransition numRepeats={1} animationTime={animationTime} fillText={fillText} fillBall={fillBall} setDone={setDone} />;
}
