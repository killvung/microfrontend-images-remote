const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
    devServer: {
        port: 3002
    },
    output: {
        publicPath: "http://localhost:3002/"
    },
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
            }
        ]
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "images_remote",
            filename: "remoteEntry.js",
            exposes: {
                './App': "./src/components/App"
            },
            shared: { react: { singleton: true }, "react-dom": { singleton: true } }
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ]
}