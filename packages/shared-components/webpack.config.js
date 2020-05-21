const path = require('path');

module.exports = ({ mode }) => ({
    mode,
    entry: './src/index.tsx',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist/'),
        libraryTarget: mode === 'production' ? 'commonjs' : 'umd',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.css', '.scss'],
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName:
                                    '[name]_[local]__[hash:base64:4]',
                                mode: 'local',
                                exportGlobals: true,
                            },
                        },
                    },
                    { loader: 'sass-loader' },
                ],
            },
            { test: /\.tsx?$/, loader: 'ts-loader' },
        ],
    },
});
