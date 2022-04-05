import { useEffect, useState } from "react";
import * as wasm from "../../../../pdf-renderer/pkg/pdf_renderer_bg.wasm";

export const usePdfRenderer = () => {
    return wasm;
}
