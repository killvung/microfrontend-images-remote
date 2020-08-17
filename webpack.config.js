const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new ModuleFederationPlugin({
            //   name: "app_one_remote",
            //   remotes: {
            //     app_two: "app_two_remote",
            //     app_three: "app_three_remote"
            //   },
            //   exposes: {
            //     'AppContainer':'./src/App'
            //   },
            //   shared: ["react", "react-dom","react-router-dom"]
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            chunks: ["main"]
        })
    ]
}