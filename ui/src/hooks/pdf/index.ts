import { useEffect, useState } from "react";
import * as wasm from "pdf-renderer-d3psi";

export const usePdfRenderer = () : any | null => {
    const [pdfRenderer, setPdfRenderer] = useState<any>(null);
    useEffect(() => {
        const fetchWasm = async () => {
            setPdfRenderer(wasm);
        };
        fetchWasm();
    }, []);
    return pdfRenderer;
}
