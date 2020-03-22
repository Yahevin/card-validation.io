const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config.js');
const webpackDevMiddleware = require('webpack-dev-middleware');
const compiler = webpack(config);

const app = express();
const port = process.env.PORT || 8000;

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
}));

app.get('/', function(req, res) {
  res.send('root');
});

app.listen(port, ()=>{
  console.log(`My app listening on port ${port}`);
});
