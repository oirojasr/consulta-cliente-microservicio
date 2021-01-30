const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  target: 'node',
  // Por problemas en el empaquetado: "Module not found: Error: Can't resolve"
  // node: {
  //   fs: 'empty',
  //   net: 'empty'
  // }
};