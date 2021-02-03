import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import './index.scss';
import App from './App';
import rootReducer from './store/reducers/rootReducer';

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));


ReactDOM.render(
        <Provider store={store}>
            <React.StrictMode>
                <Router>
                    <App/>
                </Router>
            </React.StrictMode>
        </Provider>,
    document.getElementById('root')
);