import Document from './_document';
import App from './App';
import About from './About';

const Routes = [
    {
        component: Document,
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