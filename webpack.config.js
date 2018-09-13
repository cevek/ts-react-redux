const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: "./src/index.tsx",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist/"
  },
  devServer: {
    contentBase: __dirname + "/dist/"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [{test: /\.tsx?$/, loader: "ts-loader"}]
  },
  plugins: [new HtmlWebpackPlugin()]
};
