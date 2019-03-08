


// 模块加载 兼 打包 webpack  

// 打包JS
// 模块打包 css/less/scss
// 模块打包 png / svg /iconfont


const webpack = require("webpack");
const path = require("path");   // node 模块 
const openBrowserPlugin = require('open-browser-webpack-plugin');  // 打开浏览器 
const htmlWebpackPlugin = require("html-webpack-plugin");  // 操作 index.html 
const extractTextWebpackPlugin =  require("extract-text-webpack-plugin");  // 抽离样式  css 和  js 分开 

module.exports = {
    entry:["./src/main.js" ],  // 入口文件 
    output:{
        path:path.resolve(__dirname,"dist"),   // resolve 处理 
        filename:"js/[name].[hash:8].js",  // [name] = main hash 以MD5 加密hash算法 生成 8 长度的 随机字符串 阻住缓存 
        publicPath:""   // 公共路径  index.html 引入   上线需要 
    },

    devtool:"source-map", // 方便调试  查看打包之前的文件

    resolve:{
        alias:{  // 别名
            "react":path.join(__dirname,"node_modules","react")
        }
    },

    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                use:["babel-loader"]
            },
            {
                test:/\.(png|gif|svg|jpg|woff|eot|ttf|woff2)\??.*$/ ,  // 打包图片 
                use:["url-loader?limit=8192&name=assets/[hash:8].[name].[ext]"]
            },
            {
                test:/\.(css|scss)$/,
                use:extractTextWebpackPlugin.extract({
                    fallback:"style-loader",  //  转为 Node 风格的代码  
                    use:[
                        'css-loader',  // commonJs 模块
                        {
                            loader:"postcss-loader", // 转换css 代码风格
                            options:{
                                plugins:function(){
                                    return [
                                        require("cssgrace"),  // 美化css 代码
                                        require('postcss-px2rem-exclude')(
                                            {
                                                remUnit:100,
                                                exclude:/antd-mobile/i,  // 排除 mint-ui 不需要进行 rem 转换 
                                            }
                                        ), // px 转 rem 
                                        require("autoprefixer")  // 自动补全 -moz -webkit -ms 
                                    ]
                                }
                            }
                        },
                        "sass-loader"
                    ]
                })
            },
            {
                test:/\.(css|less)$/,
                use:extractTextWebpackPlugin.extract({
                    fallback:"style-loader",  //  转为 Node 风格的代码  
                    use:[
                        'css-loader',  // commonJs 模块
                        {
                            loader:"postcss-loader", // 转换css 代码风格
                            options:{
                                plugins:function(){
                                    return [
                                        require("cssgrace"),  // 美化css 代码
                                        require('postcss-px2rem-exclude')(
                                            {
                                                remUnit:100,
                                                exclude:/mint-ui/i,  // 排除 mint-ui 不需要进行 rem 转换 
                                            }
                                        ), // px 转 rem 
                                        require("autoprefixer")  // 自动补全 
                                    ]
                                }
                            }
                        },
                        "less-loader"
                    ]
                })
            }
        ],

    },
    
    devServer:{
        contentBase:path.join(__dirname,"dist"), // base  根据地  开发环境 
        compress:true,
        hot:true,
        inline:true,
        // open:true,
        host:"0.0.0.0",
        port:1992,
        publicPath:"",  // 公共文件路径,
        historyApiFallback:true,  // html5 history API
        disableHostCheck:true,
        proxy: {
            '/vue/*': {
            target: 'http://localhost:3000/',
            changeOrigin: true,
            secure: false
            }
        }

    },

    // webpack 插件  
    plugins:[
        new openBrowserPlugin({url:"http://localhost:8000"}),

        new htmlWebpackPlugin({
            template:"./src/index.html",   // 指明编译的文件
            inject:true // 自动注入 js/css
        }),
        
        new extractTextWebpackPlugin({
            filename:"css/app.[hash:8].css",
            allChunks:true,  // 全数据 编译
            disable:false   // true 无法抽离样式 
        })



    ]

}
