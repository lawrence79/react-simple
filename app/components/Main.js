var React = require('react');
var ReactDOM = require('react-dom');

class App extends React.Component {
  render () {
    return <p> Hello React!</p>;
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));