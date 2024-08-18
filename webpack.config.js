// webpack.config.js
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/app.js",
  output: {
    filename: "js/bundle.js",
    path: path.resolve(__dirname, "public/assets/"),
  },
  module: {
    rules: [
      // JavaScript
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      // SCSS
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      // Images
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext][query]",
        },
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/styles.css",
    }),
  ],
  devServer: {
    static: [
      {
        directory: path.join(__dirname, "public"),
        watch: true,
      },
      {
        directory: path.join(__dirname, "src"),
        watch: true,
      },
    ],
    compress: true,
    port: 9000,
    open: false,
    liveReload: true,
    watchFiles: ["public/index.html", "src/app.js", "src/scss/index.scss"],
  },
  resolve: {
    extensions: [".js", ".scss"],
  },
};
