const HtmlWebPackPlugin = require("html-webpack-plugin")
const MODE = "development"

module.exports = {
	mode: MODE,
	module: {
		rules: [
			{
				test:  /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				},
			},
			{
				test: /\.(jpg|png|svg|jpeg)$/,
				loader: 'url-loader',
				options: {
					limit: 25000,
				},
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: "html-loader",
						options: { minimize: true }
					}
				]
			},
			{
				test: /\.scss/, 
				use: [
					"style-loader",
					{
						loader: "css-loader",
						options: {
							url: false,
							importLoaders: 2
						},
					},
					{
						loader: "sass-loader",
					}
				],
			},
		]
	},
	devServer: {
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
},
	resolve: {
		extensions: [".js", ".jsx"],
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: "./src/index.html",
			filename: "./index.html"
		})
	]
}