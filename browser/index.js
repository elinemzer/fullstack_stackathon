import React from 'react';
import ReactDOM from 'react-dom';
import scss from '../index.scss';

import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import store from './store';

import Home from './components/Home';
import MapContainer from './containers/MapContainer';
//import Map from './components/Map'


ReactDOM.render(
  <Provider store={store}>
  	<Router history = {hashHistory}>
        <IndexRoute path='/home' component={Home} />
        <Route path='/' component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/map" component={MapContainer} />
	  </Router>
  </Provider>,
  document.getElementById('app') // make sure this is the same as the id of the div in your index.html
);
