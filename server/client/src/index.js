import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/App';
import Reducers from './reducers';

const store = createStore(Reducers, {}, applyMiddleware());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector('#root'));