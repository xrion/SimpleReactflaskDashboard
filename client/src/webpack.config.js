const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // Entry point of your application
    entry: './src/index.jsx',

    // Output configuration
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    // Resolving file extensions
    resolve: {
        extensions: ['.js', '.jsx']
    },

    // Loaders and rules for processing different file types
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: ['file-loader']
            }
        ]
    },

    // Plugins
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ],

    // Development server configuration
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000,
        hot: true,
        historyApiFallback: true,
    }
};
