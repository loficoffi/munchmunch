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
import './index.css';
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";
import Login from "./components/Login.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <RecordList/>,
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
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/login",
                element: <Login/>,
            },
        ],
    },
    {
        path: "/dashboard", // Pfad für das Dashboard
        element: <App />,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard />, // Dashboard-Komponente einfügen
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <DevSupport ComponentPreviews={ComponentPreviews}
                    useInitialHook={useInitial}
        >
            <RouterProvider router={router}/>
        </DevSupport>
    </React.StrictMode>,
)
