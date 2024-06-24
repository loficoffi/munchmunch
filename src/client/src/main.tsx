import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import App from './App.tsx';
import Record from "./components/Record";
import RecordList from "./components/RecordList.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import RecipeView from "./pages/RecipeView.tsx";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";
import MyRecipes from "./pages/MyRecipes.tsx";

import './index.css';
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";

const router = createBrowserRouter([
    {
        path: "/", // Pfad für das Dashboard
        element: <App />,
        children: [
            {
                path: "/",
                element: <Dashboard />, // Dashboard-Komponente einfügen
            },
        ],
    },
    {
        path: "/edit/:id",
        element: <App/>,
        children: [
            {
                path: "/edit/:id",
                element: <Record/>,
            },
        ],
    },
    {
        path: "/create",
        element: <App/>,
        children: [
            {
                path: "/create",
                element: <Record/>,
            },
        ],
    },
    {
        path: "/login",
        element:  <Login/>,
    },
    {
        path: "/register",
        element: <Register/>,

    },
    {
        path: "/recipe/:id", // Pfad für das Dashboard
        element: <App />,
        children: [
            {
                path: "/recipe/:id/*",
                element: <RecipeView />, // Dashboard-Komponente einfügen
            },
            {
                path: "/recipe/:id",
                element: <RecipeView />, // Dashboard-Komponente einfügen
            },
        ],
    },
    {
        path: "/myrecipes", // Pfad für das Dashboard
        element: <App />,
        children: [
            {
                path: "/myrecipes",
                element: <MyRecipes/>, // Dashboard-Komponente einfügen
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <DevSupport ComponentPreviews={ComponentPreviews}
                    useInitialHook={useInitial}>
            <RouterProvider router={router}/>
        </DevSupport>
    </React.StrictMode>,
)
