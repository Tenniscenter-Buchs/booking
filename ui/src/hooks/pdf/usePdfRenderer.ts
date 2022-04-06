import { useEffect, useState } from "react";

export const usePdfRenderer = () : any | null => {
    const [pdfRenderer, setPdfRenderer] = useState<any>(null);
    useEffect(() => {
        const fetchWasm = async () => {
            setPdfRenderer(await import("pdf-renderer-d3psi"));
        };
        fetchWasm();
    }, []);
    return pdfRenderer;
}
