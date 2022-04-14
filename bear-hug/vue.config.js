module.exports = {
    chainWebpack: config => {
        // 发布模式
        config.when(process.env.NODE_ENV === 'production', config => {
            config
                .entry('app')
                .clear()
                .add('./src/main-prod.js')
        })

        // 开发模式
        config.when(process.env.NODE_ENV === 'development', config => {
            config
                .entry('app')
                .clear()
                .add('./src/main-dev.js')
        })
    },
    publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "~@/assets/scss/config.scss";`,
            },
        },
    },
    devServer: {
        // 配置代理
        proxy: {
            //代理接口前缀为/fragment的请求
            '/api': {
                target: 'http://101.200.141.242:9991/', //需要代理到的目标地址
                ws: true,
                secure: false,
                changOrigin: true, //是否跨域
                pathRewrite: {
                    '^/api': '' //重写路径
                }
            }

        }
    }
}