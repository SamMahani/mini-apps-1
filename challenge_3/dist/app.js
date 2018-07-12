'use strict';

var App = function App() {
  return React.createElement(
    'div',
    null,
    'loading react'
  );
};

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));