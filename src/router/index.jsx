import loadable from 'react-loadable';

const Login = loadable({ loader: () => import('../main/loginPage/Login.jsx'), loading: () => null });
const AdminPage = loadable({ loader: () => import('../main/adminPage'), loading: () => null });
const UserPage = loadable({ loader: () => import('../main/userPage'), loading: () => null });

const indexRoutes = [
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/admin',
        name: 'Admin',
        component: AdminPage
    },
    {
        path: '/user',
        name: 'User',
        component: UserPage
    },
    { path: '/', pathTo: '/login', name: 'Login', redirect: true }
];

export default indexRoutes;
