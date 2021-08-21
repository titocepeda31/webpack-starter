const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const CssMinimizer = require('css-minimizer-webpack-plugin');
const Terser = require('terser-webpack-plugin');

const prodConfing = {
    
mode:"production",
devServer: {
    open: {
        app: {
          name: 'chrome',
        },
    }   
  },    
  optimization:{
    minimize:true,
    minimizer:[
      new CssMinimizer(),
      new Terser(),
    ]
  },
  plugins:[
      

  ]
    

}

module.exports = merge(common,prodConfing);

