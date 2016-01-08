import React from 'react';
import {render} from 'react-dom';
import SweetComponent from './SweetComponent.jsx';
import CommentBox from './CommentBox.jsx';

// static data
let data = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
];

class App extends React.Component {
  render () {
    return (
       <div className="container-fluid">
          <div className="col-md-12">
            <h1> Hello React!</h1>
            <SweetComponent />
            <CommentBox data={data} />
          </div>
        </div>
    );
  }
}

render(<App/>, document.getElementById('app'));