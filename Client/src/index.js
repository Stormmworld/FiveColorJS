//import './Scripts/jquery.js';
//import './Scripts/jquery.signalr.js';
//import './Scripts/server.js';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './Containers/AppContainer';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import store from './Redux/store';
import { Provider } from 'react-redux';
 
ReactDOM.render((
  <Provider store={store}>
    <AppContainer />
  </Provider>),
document.getElementById('root')
);
registerServiceWorker();
