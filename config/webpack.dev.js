
//const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
//const { HotModuleReplacementPlugin } = require("webpack");

const { merge } = require("webpack-merge");
const common = require("./webpack.common");

/** @type {import('webpack').Configuration} */
const devConfig = {
  mode: "development",
  devServer:{
    hot:true,
    open:{
        app:{
          name: 'chrome',
        },
    },    
  },    
  //target: "web",
  //plugins: [new HotModuleReplacementPlugin(), new ReactRefreshWebpackPlugin()],
  //devtool: "eval-source-map",
 
};

module.exports = merge(common, devConfig);