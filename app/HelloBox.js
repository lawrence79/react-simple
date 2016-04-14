// Import React and HelloText class
require('../scss/HelloBox.scss');


import React from 'react';
import HelloText from './HelloText';

// Create class called HelloBox that extends the base React Component class
export default class HelloBox extends React.Component {
    constructor() {
        super();
    }

    render() {
        return <div className="hello-box">
            <HelloText name="Joe" />
        </div>
    }
}