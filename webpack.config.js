var webpack = require('webpack');  
module.exports = {  
    entry: [
      "./js/app.js"
    ],
    output: {
        path: __dirname + '/build',
        filename: "bundle.js",
        libraryTarget: 'umd'
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            { test: /\.scss$/, loader: "style!css!sass" }
        ]
    },
    plugins: [
      new webpack.NoErrorsPlugin()
    ]

};
