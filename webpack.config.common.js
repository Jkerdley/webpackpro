const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    context: path.resolve(__dirname, "src"),
    entry: "./index.tsx",
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".jsx"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "public/index.html"),
        }),
        new CopyPlugin({
            patterns: [
                { from: path.resolve(__dirname, "public/favicon.ico"), to: path.resolve(__dirname, "dist") },
                {
                    from: path.resolve(__dirname, "public/assets/rainy-bg.jpg"),
                    to: path.resolve(__dirname, "dist/bg"),
                },
                {
                    from: path.resolve(__dirname, "public/assets/summer-bg.jpg"),
                    to: path.resolve(__dirname, "dist/bg"),
                },
                {
                    from: path.resolve(__dirname, "public/assets/winter-bg.jpg"),
                    to: path.resolve(__dirname, "dist/bg"),
                },
                {
                    from: path.resolve(__dirname, "public/assets/icons/cloud-rain.svg"),
                    to: path.resolve(__dirname, "dist/icons"),
                },
                {
                    from: path.resolve(__dirname, "public/assets/icons/cloud-snow.svg"),
                    to: path.resolve(__dirname, "dist/icons"),
                },
                {
                    from: path.resolve(__dirname, "public/assets/icons/pause.svg"),
                    to: path.resolve(__dirname, "dist/icons"),
                },
                {
                    from: path.resolve(__dirname, "public/assets/icons/sun.svg"),
                    to: path.resolve(__dirname, "dist/icons"),
                },
                {
                    from: path.resolve(__dirname, "public/assets/sounds/rain.mp3"),
                    to: path.resolve(__dirname, "dist/sounds"),
                },
                {
                    from: path.resolve(__dirname, "public/assets/sounds/summer.mp3"),
                    to: path.resolve(__dirname, "dist/sounds"),
                },
                {
                    from: path.resolve(__dirname, "public/assets/sounds/winter.mp3"),
                    to: path.resolve(__dirname, "dist/sounds"),
                },
            ],
        }),
        new MiniCssExtractPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: "asset/resource",
            },
            {
                test: /\.[tj]sx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [require("postcss-preset-env")],
                            },
                        },
                    },
                    "sass-loader",
                ],
            },
        ],
    },
};
