const withPlugins = require("next-compose-plugins");
const withBundleAnalyzer = require("@next/bundle-analyzer");

const bundleAnalyzer = withBundleAnalyzer({enabled: process.env.NEXT_ANALYZE === 'true'});

// This entire configuration file using WasmChunksFixPlugin is because of https://github.com/vercel/next.js/issues/29362
module.exports = withPlugins([bundleAnalyzer], {
    webpack(config, { isServer, dev }) {
        config.experiments = {
            asyncWebAssembly: true,
            layers: true,
        };

        if (!dev && isServer) {
            config.output.webassemblyModuleFilename = "chunks/[id].wasm";
            config.plugins.push(new WasmChunksFixPlugin());
        }

        return config;
    },
});

class WasmChunksFixPlugin {
    apply(compiler) {
        compiler.hooks.thisCompilation.tap("WasmChunksFixPlugin", (compilation) => {
            compilation.hooks.processAssets.tap(
                { name: "WasmChunksFixPlugin" },
                (assets) =>
                Object.entries(assets).forEach(([pathname, source]) => {
                    if (!pathname.match(/\.wasm$/)) return;
                    compilation.deleteAsset(pathname);

                    const name = pathname.split("/")[1];
                    const info = compilation.assetsInfo.get(pathname);
                    compilation.emitAsset(name, source, info);
                })
            );
        });
    }
}
