import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/app/App';
// import './css/eui.css';
// import './index.css';
// import {Router, browserHistory } from 'react-router';

// import history from './history';
// import routes from './routes';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<Router  history={browserHistory} routes={routes}></Router>, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
