import React, {useEffect, useState} from "react";

// @ts-ignore
import SvgLines from 'react-mt-svg-lines';

import {Box, Center, ScaleFade, useUnmountEffect, useTheme, useColorModeValue} from '@chakra-ui/react'

export const LogoTransition = ({scale, strokeWidth, animationTime, numRepeats, fillText, fillBall, setDone}: {
    scale?: number, strokeWidth?: number,
    animationTime?: number, numRepeats?: number, fillText?: boolean, fillBall?: boolean, setDone: Function
}) => {
    if (!scale) {
        scale = 1;
    }
    if (!strokeWidth) {
        strokeWidth = 1;
    }
    if (!animationTime) {
        animationTime = 2000;
    }
    if (numRepeats) {
        numRepeats *= 2;
        setTimeout(() => setDone(true), numRepeats * 0.8 * animationTime);
    }

    const theme = useTheme();
    const letterBFillColor =  useColorModeValue("#ffffff", theme["background"]);

    let animation =
        <SvgLines animate={true} fade={true} timing={"ease-in-out"} stagger={15}
            playback={numRepeats ? numRepeats + " alternate both" : "infinite alternate both"}
            duration={animationTime}
            className={"logo-transition"}>
            <svg
                width="100%"
                viewBox="0 0 582 291">
                <path id="B1-outer"
                    fill={fillText ? "#1a99d6" : "none"} stroke="#1a99d6" strokeWidth={strokeWidth}
                    d="M 296.00,186.27
                    C 305.73,186.55 310.82,170.82 310.82,170.82
                    310.82,170.82 311.64,167.91 314.55,156.45
                    317.45,145.00 308.73,144.73 308.73,144.73
                    308.73,144.73 269.09,144.64 269.09,144.64
                    269.09,144.64 246.45,229.45 246.45,229.45
                    246.45,229.45 292.55,229.91 292.55,229.91
                    292.55,229.91 314.55,198.36 295.82,189.09
                    296.08,185.08 295.98,186.63 296.00,186.27 Z" />
                <path id="B1-inner"
                    fill={fillText ? letterBFillColor : "none"} stroke="#1a99d6" strokeWidth={strokeWidth}
                    d="M 271.44,215.94
                    C 271.44,215.94 275.81,215.75 275.81,215.75
                    275.81,215.75 281.12,193.19 281.12,193.19
                    281.12,193.19 277.62,193.19 277.62,193.19
                    277.62,193.19 271.44,215.94 271.44,215.94 Z
                    M 282.50,174.94
                    C 282.50,174.94 286.00,174.94 286.00,174.94
                    286.00,174.94 289.56,160.44 289.56,160.44
                    289.56,160.44 286.19,160.44 286.19,160.44
                    286.19,160.44 282.50,174.94 282.50,174.94 Z" />
                <path id="ball-left"
                    fill={fillBall ? "#fdd000" : "none"} stroke="#fdd000" strokeWidth={strokeWidth}
                    d="M 146.06,176.56
                    C 146.06,176.56 153.50,140.12 198.44,144.12
                    194.56,167.50 167.12,182.56 146.06,176.56 Z" />
                <path id="ball-right"
                    fill={fillBall ? "#fdd000" : "none"} stroke="#fdd000" strokeWidth={strokeWidth}
                    d="M 144.66,189.03
                    C 144.66,189.03 194.56,198.94 209.50,148.25
                    211.38,149.12 233.38,159.12 233.75,187.19
                    234.12,215.25 208.81,233.25 187.56,232.88
                    166.31,232.50 148.75,214.00 145.19,193.81
                    144.69,190.22 144.61,189.49 144.66,189.03 Z" />
                <path id="C1"
                    fill={fillText ? "#1a99d6" : "none"} stroke="#1a99d6" strokeWidth={strokeWidth}
                    d="M 314.69,137.00
                    C 314.69,137.00 322.75,109.56 322.75,109.56
                    322.75,109.56 301.25,109.06 301.25,109.06
                    301.25,109.06 298.62,118.81 298.62,118.81
                    298.62,118.81 295.88,118.88 295.88,118.88
                    295.88,118.88 304.88,85.00 304.88,85.00
                    304.88,85.00 307.56,85.00 307.56,85.00
                    307.56,85.00 304.69,97.44 304.69,97.44
                    304.69,97.44 326.31,97.75 326.31,97.75
                    326.31,97.75 331.69,76.56 331.69,76.56
                    331.69,76.56 334.69,68.38 327.56,68.38
                    320.44,68.38 297.25,68.38 297.25,68.38
                    297.25,68.38 290.00,66.88 287.69,76.12
                    285.38,85.38 275.06,123.19 275.06,123.19
                    275.06,123.19 269.75,137.12 280.00,137.25
                    290.25,137.38 314.69,137.00 314.69,137.00 Z" />
                <path id="C2"
                    fill={fillText ? "#1a99d6" : "none"} stroke="#1a99d6" strokeWidth={strokeWidth}
                    d="M 395.44,230.00
                    C 395.44,230.00 403.50,202.56 403.50,202.56
                    403.50,202.56 382.00,202.06 382.00,202.06
                    382.00,202.06 379.38,211.81 379.38,211.81
                    379.38,211.81 376.62,211.88 376.62,211.88
                    376.62,211.88 385.62,178.00 385.62,178.00
                    385.62,178.00 388.31,178.00 388.31,178.00
                    388.31,178.00 385.44,190.44 385.44,190.44
                    385.44,190.44 407.06,190.75 407.06,190.75
                    407.06,190.75 412.44,169.56 412.44,169.56
                    412.44,169.56 415.44,161.38 408.31,161.38
                    401.19,161.38 378.00,161.38 378.00,161.38
                    378.00,161.38 370.75,159.88 368.44,169.12
                    366.12,178.38 355.81,216.19 355.81,216.19
                    355.81,216.19 350.50,230.12 360.75,230.25
                    371.00,230.38 395.44,230.00 395.44,230.00 Z" />
                <path id="E1"
                    fill={fillText ? "#1c3660" : "none"} stroke="#1c3660" strokeWidth={strokeWidth}
                    d="M 80.88,137.56
                    C 80.88,137.56 43.43,137.57 43.43,137.57
                    43.43,137.57 37.13,134.61 39.17,127.48
                    41.22,120.35 48.83,89.96 52.57,78.00
                    56.30,66.04 64.83,68.52 64.83,68.52
                    64.83,68.52 92.61,68.48 92.61,68.48
                    92.61,68.48 98.09,67.78 96.74,73.65
                    95.39,79.52 86.74,114.13 86.74,114.13
                    86.74,114.13 65.70,113.98 65.70,113.98
                    65.70,113.98 73.26,85.26 73.26,85.26
                    73.26,85.26 69.22,85.17 69.22,85.17
                    69.22,85.17 61.26,118.04 61.26,118.04
                    61.26,118.04 86.22,118.11 86.22,118.11
                    86.22,118.11 80.88,137.56 80.88,137.56 Z
                    M 52.50,100.94" />
                <path id="E2"
                    fill={fillText ? "#1a99d6" : "none"} stroke="#1a99d6" strokeWidth={strokeWidth}
                    d="M 364.12,137.44
                    C 364.12,137.44 326.68,137.57 326.68,137.57
                    326.68,137.57 320.38,134.61 322.42,127.48
                    324.47,120.35 332.08,89.96 335.82,78.00
                    339.55,66.04 348.08,68.52 348.08,68.52
                    348.08,68.52 375.86,68.48 375.86,68.48
                    375.86,68.48 381.34,67.78 379.99,73.65
                    378.64,79.52 369.99,114.13 369.99,114.13
                    369.99,114.13 348.95,114.17 348.95,114.17
                    348.95,114.17 356.51,85.26 356.51,85.26
                    356.51,85.26 352.47,85.17 352.47,85.17
                    352.47,85.17 344.51,118.04 344.51,118.04
                    344.51,118.04 369.26,118.22 369.26,118.22
                    369.26,118.22 364.12,137.44 364.12,137.44 Z" />
                <path id="E3"
                    fill={fillText ? "#1a99d6" : "none"} stroke="#1a99d6" strokeWidth={strokeWidth}
                    d="M 515.19,137.75
                    C 515.19,137.75 477.78,137.75 477.78,137.75
                    477.78,137.75 471.47,134.79 473.51,127.66
                    475.56,120.53 483.17,90.14 486.91,78.18
                    490.65,66.23 499.17,68.70 499.17,68.70
                    499.17,68.70 526.95,68.66 526.95,68.66
                    526.95,68.66 532.43,67.96 531.08,73.83
                    529.73,79.70 521.08,114.31 521.08,114.31
                    521.08,114.31 500.04,114.35 500.04,114.35
                    500.04,114.35 507.60,85.44 507.60,85.44
                    507.60,85.44 503.56,85.36 503.56,85.36
                    503.56,85.36 495.60,118.23 495.60,118.23
                    495.60,118.23 520.39,118.00 520.39,118.00
                    520.39,118.00 515.19,137.75 515.19,137.75 Z" />§
                <path id="H1"
                    fill={fillText ? "#1a99d6" : "none"} stroke="#1a99d6" strokeWidth={strokeWidth}
                    d="M 439.18,160.55
                    C 439.18,160.55 443.64,145.09 443.64,145.09
                    443.64,145.09 423.55,144.91 423.55,144.91
                    423.55,144.91 400.73,229.55 400.73,229.55
                    400.73,229.55 421.00,229.27 421.00,229.27
                    421.00,229.27 434.00,180.18 434.00,180.18
                    434.00,180.18 437.36,179.82 437.36,179.82
                    437.36,179.82 424.00,229.45 424.00,229.45
                    424.00,229.45 445.45,229.36 445.45,229.36
                    445.45,229.36 460.36,171.18 460.36,171.18
                    460.36,171.18 463.18,160.45 455.55,160.55
                    447.91,160.64 439.18,160.55 439.18,160.55 Z
                    M 410.00,248.18" />
                <path id="I1-dot"
                    fill={fillText ? "#1c3660" : "none"} stroke="#1c3660" strokeWidth={strokeWidth}
                    d="M 199.75,83.50
                    C 199.75,83.50 203.81,68.19 203.81,68.19
                    203.81,68.19 225.19,68.19 225.19,68.19
                    225.19,68.19 221.38,83.56 221.38,83.56
                    221.38,83.56 199.75,83.50 199.75,83.50 Z" />
                <path id="I1-lower"
                    fill={fillText ? "#1c3660" : "none"} stroke="#1c3660" strokeWidth={strokeWidth}
                    d="M 198.94,87.69
                    C 198.94,87.69 220.12,87.50 220.12,87.50
                    220.12,87.50 206.88,137.50 206.88,137.50
                    206.88,137.50 185.00,137.31 185.00,137.31
                    185.00,137.31 198.94,87.69 198.94,87.69 Z" />
                <path id="N1"
                    fill={fillText ? "#1c3660" : "none"} stroke="#1c3660" strokeWidth={strokeWidth}
                    d="M 103.43,68.04
                    C 103.43,68.04 84.74,136.96 84.74,136.96
                    84.74,136.96 106.04,137.30 106.04,137.30
                    106.04,137.30 120.22,85.22 120.22,85.22
                    120.22,85.22 123.65,85.22 123.65,85.22
                    123.65,85.22 109.30,137.39 109.30,137.39
                    109.30,137.39 130.83,137.48 130.83,137.48
                    130.83,137.48 146.74,77.74 146.74,77.74
                    146.74,77.74 149.04,68.13 143.83,68.17
                    138.61,68.22 103.43,68.04 103.43,68.04 Z" />
                <path id="N2"
                    fill={fillText ? "#1c3660" : "none"} stroke="#1c3660" strokeWidth={strokeWidth}
                    d="M 153.61,67.96
                    C 153.61,67.96 134.91,136.87 134.91,136.87
                    134.91,136.87 156.48,137.39 156.48,137.39
                    156.48,137.39 170.39,85.13 170.39,85.13
                    170.39,85.13 174.39,85.13 174.39,85.13
                    174.39,85.13 159.48,137.30 159.48,137.30
                    159.48,137.30 181.30,137.22 181.30,137.22
                    181.30,137.22 196.91,77.65 196.91,77.65
                    196.91,77.65 199.22,68.04 194.00,68.09
                    188.78,68.13 153.61,67.96 153.61,67.96 Z" />
                <path id="N3"
                    fill={fillText ? "#1a99d6" : "none"} stroke="#1a99d6" strokeWidth={strokeWidth}
                    d="M 387.06,68.14
                    C 387.06,68.14 368.37,137.05 368.37,137.05
                    368.37,137.05 389.93,137.57 389.93,137.57
                    389.93,137.57 403.85,85.31 403.85,85.31
                    403.85,85.31 407.85,85.31 407.85,85.31
                    407.85,85.31 392.93,137.49 392.93,137.49
                    392.93,137.49 414.76,137.40 414.76,137.40
                    414.76,137.40 430.37,77.83 430.37,77.83
                    430.37,77.83 432.67,68.23 427.45,68.27
                    422.24,68.31 387.06,68.14 387.06,68.14 Z" />
                <path id="R1"
                    fill={fillText ? "#1a99d6" : "none"} stroke="#1a99d6" strokeWidth={strokeWidth}
                    d="M 519.50,137.47
                    C 519.50,137.47 541.25,137.38 541.25,137.38
                    541.25,137.38 555.25,84.38 555.25,84.38
                    555.25,84.38 558.00,84.25 558.00,84.25
                    558.00,84.25 554.88,98.38 554.88,98.38
                    554.88,98.38 576.12,98.00 576.12,98.00
                    576.12,98.00 581.62,75.50 581.62,75.50
                    581.62,75.50 585.19,67.78 576.19,67.91
                    567.19,68.03 545.84,67.88 545.84,67.88
                    545.84,67.88 538.84,66.97 536.34,76.34
                    533.84,85.72 519.50,137.47 519.50,137.47 Z" />
                <path id="S1"
                    fill={fillText ? "#1c3660" : "none"} stroke="#1c3660" strokeWidth={strokeWidth}
                    d="M 218.62,111.19
                    C 218.62,111.19 239.69,111.12 239.69,111.12
                    239.69,111.12 237.19,120.69 237.19,120.69
                    237.19,120.69 240.00,120.81 240.00,120.81
                    240.00,120.81 243.81,107.94 243.81,107.94
                    243.81,107.94 219.19,107.75 219.19,107.75
                    219.19,107.75 227.75,76.69 227.75,76.69
                    227.75,76.69 228.62,67.69 236.56,67.75
                    244.50,67.81 268.69,68.00 268.69,68.00
                    268.69,68.00 275.31,67.12 273.62,73.38
                    271.94,79.62 268.31,94.25 268.31,94.25
                    268.31,94.25 247.44,94.25 247.44,94.25
                    247.44,94.25 249.94,85.12 249.94,85.12
                    249.94,85.12 246.69,85.31 246.69,85.31
                    246.69,85.31 243.69,97.44 243.69,97.44
                    243.69,97.44 267.81,97.38 267.81,97.38
                    267.81,97.38 259.12,129.44 259.12,129.44
                    259.12,129.44 258.19,137.12 249.75,137.12
                    241.31,137.12 217.19,137.25 217.19,137.25
                    217.19,137.25 211.94,136.31 214.31,128.25
                    216.69,120.19 218.62,111.19 218.62,111.19 Z" />
                <path id="S2"
                    fill={fillText ? "#1a99d6" :"none"} stroke="#1a99d6" strokeWidth={strokeWidth}
                    d="M 456.63,203.73
                    C 456.63,203.73 477.69,203.67 477.69,203.67
                    477.69,203.67 475.19,213.23 475.19,213.23
                    475.19,213.23 478.00,213.36 478.00,213.36
                    478.00,213.36 481.81,200.48 481.81,200.48
                    481.81,200.48 457.19,200.30 457.19,200.30
                    457.19,200.30 465.75,169.23 465.75,169.23
                    465.75,169.23 466.62,160.23 474.56,160.30
                    482.50,160.36 506.69,160.55 506.69,160.55
                    506.69,160.55 513.31,159.67 511.62,165.92
                    509.94,172.17 506.31,186.80 506.31,186.80
                    506.31,186.80 485.44,186.80 485.44,186.80
                    485.44,186.80 487.94,177.67 487.94,177.67
                    487.94,177.67 484.69,177.86 484.69,177.86
                    484.69,177.86 481.69,189.98 481.69,189.98
                    481.69,189.98 505.81,189.92 505.81,189.92
                    505.81,189.92 497.12,221.98 497.12,221.98
                    497.12,221.98 496.19,229.67 487.75,229.67
                    479.31,229.67 455.19,229.80 455.19,229.80
                    455.19,229.80 449.94,228.86 452.31,220.80
                    454.69,212.73 456.63,203.73 456.63,203.73 Z" />
                <path id="T1"
                    fill={fillText? "#1c3660" : "none"} stroke="#1c3660" strokeWidth={strokeWidth}
                    d="M 8.87,52.65
                    C 8.87,52.65 4.52,68.39 4.52,68.39
                    4.52,68.39 18.83,68.13 18.83,68.13
                    18.83,68.13 -0.04,137.61 -0.04,137.61
                    -0.04,137.61 24.43,137.83 24.43,137.83
                    24.43,137.83 42.74,68.17 42.74,68.17
                    42.74,68.17 57.09,68.52 57.09,68.52
                    57.09,68.52 61.61,52.61 61.61,52.61
                    61.61,52.61 8.87,52.65 8.87,52.65 Z" />
                <path id="T2"
                    fill={fillText ? "#1a99d6" : "none"} stroke="#1a99d6" strokeWidth={strokeWidth}
                    d="M 431.12,137.00
                    C 431.12,137.00 452.75,137.00 452.75,137.00
                    452.75,137.00 465.50,88.62 465.50,88.62
                    465.50,88.62 479.78,88.52 479.78,88.52
                    479.78,88.52 485.04,68.04 485.04,68.04
                    485.04,68.04 472.12,68.00 472.12,68.00
                    472.12,68.00 476.25,52.12 476.25,52.12
                    476.25,52.12 454.12,51.88 454.12,51.88
                    454.12,51.88 449.38,68.38 449.38,68.38
                    449.38,68.38 437.00,68.50 437.00,68.50
                    437.00,68.50 432.00,88.12 432.00,88.12
                    432.00,88.12 444.38,87.88 444.38,87.88
                    444.38,87.88 431.12,137.00 431.12,137.00 Z" />
                <path id="U1"
                    fill={fillText ? "#1a99d6" : "none"} stroke="#1a99d6" strokeWidth={strokeWidth}
                    d="M 365.91,159.91
                    C 365.91,159.91 344.22,160.04 344.22,160.04
                    344.22,160.04 331.64,212.73 331.64,212.73
                    331.64,212.73 328.07,212.62 327.73,212.73
                    327.73,212.73 341.55,160.00 341.55,160.00
                    341.55,160.00 320.39,160.09 320.39,160.09
                    320.39,160.09 305.18,217.64 305.18,217.64
                    305.18,217.64 299.55,229.82 309.73,229.91
                    319.91,230.00 340.55,229.91 340.55,229.91
                    340.55,229.91 347.36,229.45 349.91,220.00
                    352.45,210.55 365.91,159.91 365.91,159.91 Z" />
                <path id="vertical-line"
                    fill={fillText ? "#151515" : "none"} stroke="#151515" strokeWidth={strokeWidth}
                    d="M 300.22,0.06
                    C 300.22,0.06 219.78,290.84 219.78,290.84
                    219.78,290.84 222.97,290.89 222.97,290.89
            222.97,290.89 303.61,0.08 303.61,0.08
            303.61,0.08 300.22,0.06 300.22,0.06 Z" />
        </svg>
        </SvgLines>;

    const [mounted, setMounted] = useState(true);
    useUnmountEffect(() => { setMounted(!mounted); }, [mounted]);
    useEffect(() => { if (mounted) document.body.style.overflow = "hidden"; }, [mounted]);
    useUnmountEffect(() => { document.body.style.overflow = "auto"; })

    animation =
        <ScaleFade initialScale={0.9} in={mounted} >
            {animation}
        </ScaleFade>;

    return (
        <React.Fragment>
            <Center height="100vh">
                <Box width={300 * scale}>
                    {animation}
                </Box>
            </Center>
        </React.Fragment>
    )
};

export const LogoBlank = ({animationTime, fillText, fillBall, setDone}: {
    animationTime?: number, fillText?: boolean, fillBall?: boolean, setDone: Function
}) => {
    if (!animationTime) {
        animationTime = 3000;
    }
    return <LogoTransition numRepeats={1} animationTime={animationTime} fillText={fillText} fillBall={fillBall} setDone={setDone} />;
}
