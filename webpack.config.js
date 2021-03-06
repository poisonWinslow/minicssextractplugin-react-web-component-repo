const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.jsx",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.module\.s?css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: "css-loader",
            options: {
              esModule: true,
              modules: {
                namedExport: true,
                localIdentName: "[local]_[hash:base64]",
              },
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.jsx$/,
        loader: "babel-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/webpack-template.html",
      filename: "index.html",
    }),
    new MiniCssExtractPlugin({
      ignoreOrder: false,
      insert: function (linkTag) {
        console.log("this should be ran when application is rendered");
        const webComponent = document.querySelector("custom-web-component");
        webComponent.shadowRoot.prepend(linkTag);
      },
      filename: "[name].[chunkhash].css",
    }),
  ],
};
