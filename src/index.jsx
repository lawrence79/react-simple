/**
 * App Entry
 */

/**
 * Libs
 */
import React from "react";
import {render} from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'

/**
 * Components
 */

import {Examples} from './components/Examples'


/*
 * Base Styles
 */
import './common/normalize';

class App extends React.Component {
  render () {
    return <div class="container">This is the container</div>;
  }
}

render(
     <Router history={hashHistory}>
        <Route path="/" component={App} />
        <Route path="/examples" component={Examples} />
    </Router>,
    document.getElementById('app')
);

