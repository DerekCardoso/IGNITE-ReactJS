const path = require('path') 

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname,'src','index.jsx'),
  output: { //aqui indica onde está o arquivo de saída da aplicação./
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js'
    },
  resolve: {
    extensions: ['.js','.jsx'] //como estou usando arquivos .jsx preciso falar para aplicação que é para ler arquivos .jsx/
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ],
  }
};  