var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');

module.exports = {
  entry: {
    'app': './js/main.js',
    'styles': './scss/main.scss'
  },
  output: {
    path: path.dirname(__dirname) + '/assets/static/gen',
    publicPath: './static',
    filename: '[name].js'
  },
  devtool: '#cheap-module-source-map',
  resolve: {
    modules: [
      path.join(__dirname, "src"),
      'node_modules',
    ],
    extensions: ['.js']
  },
  module: {
   rules: [
    {
      test: /\.(woff(2)?|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,    //to support @font-face rule 
      loader: "url-loader",
      query:{
        limit:'10000',
        name:'[name].[ext]',
        outputPath:'fonts/'
        //the fonts will be emmited to public/assets/fonts/ folder 
        //the fonts will be put in the DOM <style> tag as eg. @font-face{ src:url(assets/fonts/font.ttf); } 
      }
    },
    {
      test: /\.(scss)$/,
      use: [{
        loader: 'style-loader', // inject CSS to page
      }, {
        loader: 'css-loader', // translates CSS into CommonJS modules
      }, {
        loader: 'postcss-loader', // Run post css actions
        options: {
          plugins: function () { // post css plugins, can be exported to postcss.config.js
            return [
              require('precss'),
              require('autoprefixer')
            ];
          }
        }
      }, {
        loader: 'sass-loader' // compiles SASS to CSS
      }]
    },
      {
        test: /\.jsx$/,
        loader: "babel-loader", // Do not use "use" here
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default'],
    }),
    new webpack.optimize.UglifyJsPlugin()
  ],
};