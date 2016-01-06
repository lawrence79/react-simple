import React from 'react';
import {render} from 'react-dom';
import SweetComponent from './SweetComponent.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        <p> Hello React!</p>
        <SweetComponent />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));