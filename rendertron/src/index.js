import React, {createContext} from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import './index.css';
import App from './App';
import routes from './routes';

export const {Provider, Consumer} = createContext();
ReactDOM.render(
    <Provider value="">
        <Consumer>
            {() => (
                <BrowserRouter>
                {renderRoutes(routes)}
            </BrowserRouter>
            )}
        </Consumer>
    </Provider>,
    // <App />,
    document.getElementById('root')
);