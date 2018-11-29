

### REACT Setup

Two important facts about the content:

the bundle.js file will be a generated file by Webpack (1)
the id=“app” attribute will help our root React component to find its entry point (2)
Therefore our next possible steps are:

(1) setup Webpack to bundle our source files in one file as bundle.js
(2) build our first React root component which uses the entry point id=“app”

### WEBPACK Setup

You will use Webpack as module bundler and build tool. Moreover you will use webpack-dev-server to serve your bundled app in a local environment. Otherwise you couldn’t see it in the browser to develop it. Last but not least, you need the webpack-cli node package to configure your Webpack setup in a configuration file later on.

* npm install --save-dev webpack webpack-dev-server webpack-cli

./package.json
.scripts.start = webpack-dev-server --config ./webpack.config.js --mode development

Create webpack.config.js

./webpack.config.js
module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  }
};

### BABEL Setup

Babel enables you writing your code in with JavaScript which isn’t supported yet in most browser. Perhaphs you have heard about JavaScript ES6 (ES2015) and beyond. With Babel the code will get transpiled back to vanilla JavaScript so that every browser, without having all JavaScript ES6 and beyond features implemented, can interpret it. In order to get Babel working, you need to install two of its main dependencies.

* npm install --save-dev @babel/core @babel/preset-env
* npm install --save-dev babel-loader
* npm install --save-dev @babel/preset-react


./.babelrc
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ]
}

##### React Setup in a Webpack + Babel Project
In order to use React, you need two more node packages. The react and react-dom packages should fix your npm start.

* npm install --save react react-dom
*

./src/index.js
import React from 'react';
import ReactDOM from 'react-dom';

const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);

### Hot Module Replacement in React
A huge development boost will give you react-hot-loader (Hot Module Replacement). It will shorten your feedback loop during development. Basically whenever you change something in your source code, the change will apply in your app running in the browser without reloading the entire page.

* npm install --save-dev react-hot-loader

You have to add some more configuration to your Webpack configuration file.

./webpack.config.js
const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  }
};

Additionally in the src/index.js file you have to define that hot reloading is available and should be used.

./src/index.js

import React from 'react';
import ReactDOM from 'react-dom';

const title = 'My Minimal React Webpack Babel Setup';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);

module.hot.accept();