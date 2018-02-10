const path = require('path')

module.exports = {
	// front-end inside src/
	entry: path.join(__dirname, 'src/js', 'index.js'),
	// all scripts will be put in dist/build.js
	output: {
		path.join(__dirname, 'dist'),
		filename: 'build.js'
	},
	module: {
		loaders: [{
			// load css in react
			test: /\.css$/,
			use: ['style-loader', 'css-loader'],
			include: /src/
		}, {
			// load js/jsx
			test: /\.jsx?$/,
			loader: 'babel-loader',
			exclude: /node-modules/,
			query: {
				presets: ['es2015', 'react', 'stage-2']
			}
		}, {
			// load json
			test: /\.json$/,
			loader: 'json-loader'
		}]
	}
}