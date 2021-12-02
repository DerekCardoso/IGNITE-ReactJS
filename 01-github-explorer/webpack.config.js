const path = require('path') 
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: isDevelopment ? 'development' : 'production',
  devtool: isDevelopment ? 'eval-source-map': 'source-map',
  entry: path.resolve(__dirname,'src','index.jsx'),
  output: { //aqui indica onde está o arquivo de saída da aplicação./
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js'
    },
  resolve: {
    extensions: ['.js','.jsx'] //como estou usando arquivos .jsx preciso falar para aplicação que é para ler arquivos .jsx/
  },
  devServer: {
    static: path.resolve(__dirname, 'public') //mostra onde está o html estático da aplicação
  },
  plugins: [
    new HtmlWebpackPlugin ({
      template: path.resolve(__dirname, 'public', 'index.html')
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ],
  }
};  