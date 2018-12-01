const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const webpack = require("webpack");

const targetPath = path.resolve("../../../target/classes/public");

module.exports = function(env, argv) {
    const isProduction = argv.mode == "production";

    const cssAssetName = isProduction ? "/css/demo.min.css" : "/css/demo.css";
    const plugins = [
        new ExtractTextPlugin(cssAssetName)
    ];

    if(isProduction) {
        plugins.push(
            new CleanWebpackPlugin(targetPath)
        );
    } else {
        plugins.push(
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NamedModulesPlugin()
        );
    }

    plugins.push(new webpack.ProvidePlugin({
        'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }));

    return {
        mode: isProduction ? "production" : "development",
        entry: {
            index: "./src/app.js",
            style : [
                "./src/styles/style.scss",
            ]
        },
        output: {
            filename: "js/" + (isProduction ?  "demo.min.js" : "demo.js"),
            path:  targetPath
        },
        devtool: isProduction ? "source-map" : "none",
        devServer: {
            historyApiFallback: true,
            contentBase: targetPath,
            publicPath: targetPath,
            compress: true,
            // port: 8000,
            // proxy: {
            //     "**": "http://localhost:3000"
            // }
        },
        module: {
            rules: [
                {
                    test:/\.js?$/,
                    exclude: /node_modules/,
                    include: /src/,
                    loader:"babel-loader",
                    query: {
                        presets: ['es2015']
                    }
                },
                {
                    test:/\.jsx?$/,
                    exclude: /node_modules/,
                    include: /src/,
                    loader:"babel-loader",
                    query: {
                        presets: ['es2015','stage-2','react']
                    }
                },
                {
                    test: /\.tsx?$/,
                    loader: "ts-loader",
                    exclude: /node_modules/
                },
                {
                    test: /\.scss$/,
                    use: ["css-hot-loader"].concat(ExtractTextPlugin.extract({
                        use: [
                            {
                                loader: "css-loader",
                                options: {
                                    url: false,
                                    minimize: isProduction,
                                    sourceMap: isProduction
                                }
                            },
                            {
                                loader: "sass-loader",
                                options: {
                                    sourceMap: isProduction
                                }
                            }
                        ]
                    }))
                }
            ]
        },
        resolve: {
            extensions: [".ts", ".tsx", ".js", ".jsx", ".json", ".scss"]
        },
        plugins: plugins,
        optimization: {
            minimizer: [new UglifyJsPlugin({
                uglifyOptions: {
                    compress: isProduction,
                    mangle: true,
                    keep_fnames: isProduction,
                    output: {
                        beautify: !isProduction,
                        comments: false
                    }
                }
            })]
        }

    }
};