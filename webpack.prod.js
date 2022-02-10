const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MINICssExtractPlugin = require("mini-css-extract-plugin");
// webpack does not support this instead use css-minimizer-webpack-plugin
//const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const TerserPlugin = require("terser-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[name].[hash].bundle.js",
    path: path.resolve("dist"),
    clean: true,
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "commons",
          chunks: "all",
        },
        react: {
          test: /[\\/]node_modules[\\/]((react).*)[\\/]/,
          name: "react",
          chunks: "all",
        },
      },
    },
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin(),
      new HTMLWebpackPlugin({
        template: "./src/index.html",
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true,
        },
      }),
    ],
  },
  plugins: [
    new MINICssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      reportFilename: "bundleAnalysis.html",
      reportTitle: "Bundle Anlysis",
      openAnalyzer: false,
      generateStatsFile: true,
    }),
    // not needed with webpack 5.
    // new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          MINICssExtractPlugin.loader, //3. Extract css into files
          "css-loader", //2. Turns css into commonjs
          "sass-loader", //1. Turns sass into css
        ],
      },
    ],
  },
});
