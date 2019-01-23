import loadable from 'react-loadable';
import withAdminRouteComponent from "./withAdminRouteComponent";
import withUserRouteComponent from "./withUserRouteComponent";

const Login = loadable({ loader: () => import('../main/loginPage/Login.jsx'), loading: () => null });
const AdminPage = loadable({ loader: () => import('../main/adminPage'), loading: () => null });
const UserPage = loadable({ loader: () => import('../main/userPage'), loading: () => null });

const withAdmin = withAdminRouteComponent("/");
const withUser = withUserRouteComponent("/");

const indexRoutes = [
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/admin',
        name: 'Admin',
        component: withAdmin(AdminPage)
    },
    {
        path: '/user',
        name: 'User',
        component: withUser(UserPage)
    },
    { path: '/', pathTo: '/login', name: 'Login', redirect: true }
];

export default indexRoutes;
