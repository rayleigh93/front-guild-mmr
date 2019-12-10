const path = require("path")
const webpack = require("webpack")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const ManifestPlugin = require("webpack-manifest-plugin")
const CleanWebpackPlugin = require("clean-webpack-plugin")
const WebpackAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin

// Get variable ENV, prod or dev
const env = process.env.NODE_ENV

const config = {
    // La ou vas commencer mon webpack
    entry: {
        // Avec un [name], on aura donc [name] = 'myApp'
        myApp: [
            "./src/css/myCss.css",
            "./src/index.ts",
        ],
    },
    // C'est ma sortie
    output: {
        // Chemin de sortie
        path: path.resolve(__dirname, "dist"), // Ici on prends le fichier courant (__dirname) + "/dist"
        // Chemin public pour le serveur de dev
        publicPath: "/dist",
        // Nomn du fichier en sortie
        filename: "index.js"
        // filename: "index.[chunkhash:8].js"
    },
    // Chemin a resoudre
    // The resolve object allows you to configure how webpack’s module resolution works
    resolve: {
        // Les fichiers a chercher
        extensions: ['.ts', '.js', '.vue'],
        alias: {
            // In this case, we’re aliasing the package vue to vue/dist/vue.esm.js, which provides Vue in ES2017 Module format.
            'vue$': 'vue/dist/vue.esm.js',
            // My alias, don't forget to add it into the ts config !
            'myAlias': path.resolve(__dirname),
          }
    },
    // Loader a utiliser
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    (!!env && env === "prod") ? MiniCssExtractPlugin.loader : "vue-style-loader",
                    'css-loader'
                ],
            }, {
                // Si le fichier termine par .ts, alors utilise le "ts-loader"
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/,
                options: {
                    // Permet de dire au ts-loader : "si tu vois un .vue, prends le comme un fichier .ts"
                    appendTsSuffixTo: [/\.vue$/]
                }
            }, {
                test: /\.vue$/,
                loader: "vue-loader",
            }, {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }, {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'url-loader'
            }]
    }, 
    plugins: [
        new MiniCssExtractPlugin({
            // Normalement ici on aura myCss.css
            filename: "myCss.css",
            // filename: "[name].[contenthash:8].css",
        }),
        new WebpackAnalyzerPlugin({
            openAnalyzer: false,
        }),
        // Generate Manifest for Hash
        // new ManifestPlugin(),
        // For delete useless bundle
        // new CleanWebpackPlugin(),
    ],
    // Info pour start serv dev de webpack
    devServer: {
        noInfo: false, // Vire les infos ou non 
        port: 8080 // Specify a port number to listen for requests
      },
}

module.exports = config