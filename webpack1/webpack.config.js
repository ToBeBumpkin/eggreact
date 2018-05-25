module.exports = {
    devtool:'eval-source-map',   //开发调试工具
    entry: __dirname + "/app/main.js",  //唯一入口文件
    output:{
        path: __dirname + "/public",  //打包后文件存放的地方
        filename:"bundle.js"   // 打包后输出的文件名
    },
    // 热更新
    devServer:{
        contentBase:"./public",   //热更新目录
        inline:true,  //实时刷新
        historyApiFallback:false,  //不跳转
    },
    module:{
        rules:[
            {
                test:/\.jsx|\.js$/,
                use:{
                    loader:"babel-loader",
                    // options:{
                    //     presets:[
                    //         "env","react"
                    //     ]
                    // }
                },
                exclude:/node_modules/
            },
            {
                test:/\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules:true,  //指定启用css modules
                            localIdentName:'[name]__[local]--[hash:base64:5]'   //指定css类名格式
                        }
                    }
                ]
            }
        ]
    }
}