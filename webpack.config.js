const webpack = require("webpack");
const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = env => ({
    mode: env.prod ? "production" : "development",
    output: { filename: "shift.js" },
    entry: "./src/shift.ts",
    externals: [nodeExternals()],
    target: "node",
    module: {
        rules: [
            {
                test: /\.ts?$/,
                loader: "ts-loader"
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    }
});
