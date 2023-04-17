import React from "react";
import  ReactDOM  from "react-dom/client";
import App from "./App"
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Packages from "./Pages/Packages";
import BookNow from "./Pages/BookNow";
import About from "./Pages/About";
import BookedTrips from "./Pages/BookedTrips";
import AddPackages from "./Pages/AddPackages";
import AddedPackages from "./Pages/AddedPackages";
import UpdatePackages from "./Pages/UpdatePackages";
import ViewPackages from "./Pages/ViewPackages";
import UserRegistration from "./Pages/UserRegistration";
import Login from './Pages/Login';
import "bootstrap/dist/css/bootstrap.min.css"

const cors = require("cors");

/*BookedTrips.use(cors({
    origin:"http://localhost:3000/BookedTrips"
}))*/

const router = createBrowserRouter([
    {
        path: "/",
        element:<App/>,
    },
    {
        path: "Packages",
        element:<Packages/>,
    },
    {
        path: "BookNow",
        element:<BookNow/>,
    },
    {
        path: "About",
        element:<About/>,
    },
    {
        path: "BookedTrips",
        element:<BookedTrips/>,
    },
    {
        path: "AddPackages",
        element:<AddPackages/>,
    },
    {
        path: "AddedPackages",
        element:<AddedPackages/>,
    },
    {
        path: "UpdatePackages",
        element:<UpdatePackages/>,
    },
    {
        path: "ViewPackages",
        element:<ViewPackages/>,
    },
    {
        path: "UserRegistration",
        element:<UserRegistration/>,
    },
    {
        path: "Login",
        element:<Login/>,
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <RouterProvider router={router} />
)