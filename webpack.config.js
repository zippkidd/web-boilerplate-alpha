const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		main: path.resolve(__dirname, './src/index.js'),
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].bundle.js',
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Web Boilerplate',
			template: path.resolve(__dirname, './src/template.html'),
			filename: 'index.html',
		})
	]
}
