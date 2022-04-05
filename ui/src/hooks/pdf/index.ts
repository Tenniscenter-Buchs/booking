import { useEffect, useState } from "react";

export const usePdfRenderer = () => {
    const [cached, setCached] = useState(false);
    const [pdfRenderer, setPdfRenderer] = useState({});
    useEffect(() => {
        if (cached) return;
        fetch("wasm/pdf-renderer.wasm").then((mod) => setPdfRenderer(mod));
        setCached(true);
    }, [cached]);
    return pdfRenderer;
}
