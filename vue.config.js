module.exports = {
    devServer: {
        proxy: {
            '/v2': {
                target: 'https://elm.cangdu.org',
                ws: true,
                changeOrigin: true
            }
        }
    }
}