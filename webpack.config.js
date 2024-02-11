const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const path = require("path");

module.exports = {
  entry: "./app/index.js", // Change this to your entry file
  output: {
    path: path.resolve(__dirname, "dist/scripts"), // Output directory
    filename: "bundle.js", // Output file
  },
  plugins: [new BundleAnalyzerPlugin()],
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
  // optimization: {
  //   splitChunks: {
  //     chunks: "all",
  //   },
  // },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },
};
