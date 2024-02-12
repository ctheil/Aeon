const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/views/index.js", // Change this to your entry file
  output: {
    path: path.resolve(__dirname, "dist/bundle"), // Output directory
    filename: "[name].[contenthash].js", // Output file
    chunkFilename: "[name].[contenthash].js",
    publicPath: "/bundle/",
  },
  mode: "production",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/html/index.html",
      publicPath: "/bundle/",
    }),
    new BundleAnalyzerPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },
};
