module.exports = {

    entry: {
        index: '.index.ts'
    },
    output: {

        filename: '[name].bundle.js',
        path: './dist/'
    },
    module: {
        rules: [{
            test: /\.ts$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]


    },

    resolve: {

        extensions: ['.ts', '.js']
    },

    devtool: 'inline-source map'

}