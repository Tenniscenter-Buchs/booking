const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([], {
    webpack(config) {
        config.experiments = { asyncWebAssembly: true, layers: true, lazyCompilation: true, syncWebAssembly: true, topLevelAwait: true, }
        return config
    }
});
