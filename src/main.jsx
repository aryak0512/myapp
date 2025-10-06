import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Cart from "./components/Cart.jsx";
import About from "./components/About.jsx";
import Login from "./components/Login.jsx";
import Contact from "./Contact.jsx";
import Home from "./components/Home.jsx";
import ErrorPage from "./components/ErrorPage.jsx";


const appRouter = createBrowserRouter([

    {
        "path": "/",
        "element": <App/>,
        "errorElement": <ErrorPage/>,
        "children": [
            // this works as the default component in case outlet cannot find any children
            {
                "path": "/",
                "index": true,
                "element": <Home/>,
            },
            {
                "path": "/",
                "element": <Home/>,
            },
            {
                "path": "/about",
                "element": <About/>,
            },
            {
                "path": "/cart",
                "element": <Cart/>,
            },
            {
                "path": "/login",
                "element": <Login/>,
            },
            {
                "path": "/contact",
                "element": <Contact/>,
            }

        ]
    },

]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={appRouter}/>
    </StrictMode>,
)
