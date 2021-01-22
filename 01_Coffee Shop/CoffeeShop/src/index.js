import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import state from './redux/state';
import './scss/style.scss';

ReactDOM.render(
	<React.StrictMode>
		<Router>
            <App state={state}></App>
        </Router>
	</React.StrictMode>,
	document.getElementById('root')
);
