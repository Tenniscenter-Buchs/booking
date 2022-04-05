const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([], {
    webpack(config) {
        config.experiments = { asyncWebAssembly: true, layers: true }
        return config
    }
});
