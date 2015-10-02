/** @jsx React.DOM */


// Not ideal to use createFactory, but don't know how to use JSX to solve this
// Posted question at: https://gist.github.com/sebmarkbage/ae327f2eda03bf165261
var App = require('./js/components/ListControllerView.react.js');

window.React = require('react');

React.render(
  <App />,
  document.getElementById('content')
);