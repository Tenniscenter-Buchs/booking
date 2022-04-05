export const usePdfRenderer = () => {
    if (typeof window === 'undefined') return;
    let pdfRenderer;
    fetch("wasm/pdf-renderer.wasm").then((mod) => pdfRenderer = mod);
    return pdfRenderer;
}
