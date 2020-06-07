const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // installed via npm



import paths from './paths';

module.exports = {
    mode: 'production',
    output: {
        filename: `${paths.jsFolder}/[name].[hash].js`,
        path: paths.outputPath,
        chunkFilename: '[name].[chunkhash].js'
    },
    plugins: [
       
        new CleanWebpackPlugin(),
    ],
    devtool: 'source-map'
};
