import Html from './src/Html';
import App from './src/pages/App';
import About from './src/pages/About';

const Routes = [
    {
        component: Html,
        routes: [
            {
                path: '/',
                exact: true,
                component: App,
            },
            {
                path: '/about',
                exact: true,
                component: About,
            },
        ],
    },
];

export default Routes;