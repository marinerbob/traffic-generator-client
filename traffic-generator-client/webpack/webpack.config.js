const path = require("path")

module.exports = (env) => {
    const modules = {
        js: {
            test: /\.ts(x?)$/,
            exclude: /node_modules/,
            use: [
                "ts-loader"
            ],
        },
        sass: {
            test: /\.s[ac]ss$/i,
            use: [
              "style-loader",
              "css-loader",
              "sass-loader",
            ],
        },
        files: {
            test: /\.(png|jpg|gif)$/i,
            type: 'asset/resource'
        }
    }

    const resolve = {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
        alias: { 
            app: path.resolve(__dirname, "..", 'src/app/'),
            pages: path.resolve(__dirname, "..", 'src/pages/'),
        },
    }

    return {
        modules,
        resolve,
    }
}