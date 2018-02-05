const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
	entry: "./src/main.js",

	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},

	devtool: "source-map",
	devServer: {
	  contentBase: './dist'
  	},

	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({template: './index.html'})
	],


	module: {
		loaders: [
			{
				loader: "babel-loader",

				// Compile files in /src directory
				include: [
					path.resolve(__dirname, 'src'),
				],

				// Babel options
				query: {
					plugins: ['transform-runtime'],
					presets: ['es2015'],
				}
			},
		]
	}
};