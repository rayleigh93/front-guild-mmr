const path = require("path")
const webpack = require("webpack")

const config = {
    // La ou vas commencer mon webpack
    entry: "./src/index.ts",
    // C'est ma sortie
    output: {
        // Chemin de sortie
        path: path.resolve(__dirname, "dist"), // Ici on prends le fichier courant (__dirname) + "/dist"
        // Chemin public pour le serveur de dev
        publicPath: "/dist",
        // Nomn du fichier en sortie
        filename: "index.js"
    },
    // Chemin a resoudre
    // The resolve object allows you to configure how webpack’s module resolution works
    resolve: {
        // Les fichiers a chercher
        extensions: ['.ts', '.js', '.vue'],
        alias: {
            // In this case, we’re aliasing the package vue to vue/dist/vue.esm.js, which provides Vue in ES2017 Module format.
            'vue$': 'vue/dist/vue.esm.js',
          }
    },
    // Loader a utiliser
    module: {
        rules: [{
            // Si le fichier termine par .vue, alors utilise le "vue-loader"
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
        }]
    },
    // Info pour start serv dev de webpack
    devServer: {
        noInfo: false, // Vire les infos ou non 
        port: 8080 // Specify a port number to listen for requests
      },
}

module.exports = config