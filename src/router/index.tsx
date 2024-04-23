import { Outlet, useRoutes } from "react-router-dom";
import Login from '../Views/Login';
import Register from '../Views/Register';
import User from '../Views/User';
import Home from '../Views/Home';
import Structure from '../Views/Structure';
import Activity from '../Views/Activity';
import Article from '../Views/Article';
import Data from '../Views/Data';
import Search from '../Views/Search';
import EditPassword from "../Views/EditPassword";
import Setting from "../Views/Setting";
import EditMail from "../Views/EditMail";
import Help from "../Views/Help";
import FrequentQuestions from "../Views/FrequentQuestions";
import SignOff from "../Views/SignOff"
import PublicArticle from "../Views/PostArticle";

const AppRoutes = () => {
    let routes = useRoutes([
        {
            path: '/login',
            element: <Login/>
        },
        {
            path: '/register',
            element: <Register/>
        },

        {
            path: '/',
            element: (<Structure />),
            children: [
                {
                    path: '',
                    element: <Home/>
                },
                {
                    path: 'activity',
                    element: <Activity/>
                },
                {
                    path: 'article',
                    element: <Article/>
                },
                {
                    path: 'user',
                    element: <User/>
                },
                {
                    path: 'data',
                    element: <Data/>
                },
                {
                    path: 'search/:search/:category',
                    element: <Search/>
                },
                {
                    path: 'search/:search',
                    element: <Search/>
                },
                {
                    path: 'search',
                    element: <Search/>
                },
                {
                    path: 'editpassword',
                    element: <EditPassword/>
                },
                {
                    path: 'setting',
                    element: <Setting/>
                },
                {
                    path: 'editmail',
                    element: <EditMail/>
                },
                {
                    path: 'help',
                    element: <Help/>
                },
                {
                    path: 'frecuentquestions',
                    element: <FrequentQuestions/>
                },
                {
                    path: 'publicarticle',
                    element: <PublicArticle/>
                },
            ]
        },
    ])

    return routes;
}

export default AppRoutes;