import { useEffect, useState } from "react";

export const useWasmModule = (moduleName: string) : any | null => {
    const [wasm, setWasm] = useState<any>(null);
    useEffect(() => {
        const fetchWasm = async () => {
            setWasm(await import(moduleName));
        };
        fetchWasm();
    }, []);
    return wasm;
}
