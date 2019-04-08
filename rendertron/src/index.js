import React, {createContext} from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import './index.css';
import App from './App';
import routes from './routes';

const Context = createContext();

ReactDOM.render(
    <Context.Consumer>
        <BrowserRouter>
            {renderRoutes(routes)}
        </BrowserRouter>
    </Context.Consumer>,
    // <App />,
    document.getElementById('root')
);