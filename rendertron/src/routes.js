import Document from './_document';
import App from './App';
import About from './About';
import StatusChange from './StatusChange';
import Basic1_1 from './Basic1_1';
import Basic1 from './Basic1';
import Host2_1 from './Host2_1';
import Host2 from './Host2';
import Host_context3_1 from './Host-context3_1';
import Host_context3 from './Host-context3';
import Slotted4_1 from './Slotted4_1';
import Slotted4 from './Slotted4';
import CustomProp5 from './CustomProp5';
import Event6 from './Event6';
import Event7 from './Event7';

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
            {
                path: '/statuschange',
                exact: true,
                component: StatusChange,
            },
            {
                path: '/basic1_1',
                exact: true,
                component: Basic1_1,
            },
            {
                path: '/basic1',
                exact: true,
                component: Basic1,
            },
            {
                path: '/host2_1',
                exact: true,
                component: Host2_1,
            },
            {
                path: '/host2',
                exact: true,
                component: Host2,
            },
            {
                path: '/host-context3_1',
                exact: true,
                component: Host_context3_1,
            },
            {
                path: '/host-context3',
                exact: true,
                component: Host_context3,
            },
            {
                path: '/slotted4_1',
                exact: true,
                component: Slotted4_1,
            },
            {
                path: '/slotted4',
                exact: true,
                component: Slotted4,
            },
            {
                path: '/customprop5',
                exact: true,
                component: CustomProp5,
            },
            {
                path: '/event6',
                exact: true,
                component: Event6,
            },
            {
                path: '/event7',
                exact: true,
                component: Event7,
            },
        ],
    },
];

export default Routes;