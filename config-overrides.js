const {alias} = require('react-app-rewire-alias')

module.exports = function override(config) {
    alias({
        '@components': 'src/components',
        '@layouts': 'src/layouts',
        '@routes': 'src/routes',
        '@themes': 'src/themes',
        '@services': 'src/services',
        '@store': 'src/store',
        '@utils': 'src/utils',
        '@views': 'src/views',
        '@assets': 'src/assets'
    })(config)

    return config;
}