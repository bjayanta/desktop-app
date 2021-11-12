// pages
import Login from "../auth/Login";
import Register from "../auth/Register";
import Dashboard from "../Dashboard";
import PageNotFound from "../PageNotFound";

const routes = [
    { path: '/', exact: true, name: 'dashboard', component: Dashboard },
    { path: '/login', exact: true, name: 'login', component: Login },
    { path: '/register', exact: true, name: 'register', component: Register },
    { component: PageNotFound },
];

export default routes;