import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import Reducers from './reducers';

const store = createStore(Reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector('#root'));

// console.log('Stripe Key is ', process.env.REACT_APP_STRIPE_KEY)
// console.log('Environment is ', process.env.NODE_ENV);