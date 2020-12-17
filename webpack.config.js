module.exports = {
	entry: __dirname + '/src/index.js',
	output: {
		path: __dirname + '/dist',
		filename: 'hasget.js',
		library: 'hasget',
		libraryTarget: 'umd'
	}
};