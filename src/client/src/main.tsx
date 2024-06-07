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

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <RecordList />,
            },
        ],
    },
    {
        path: "/edit/:id",
        element: <App />,
        children: [
            {
                path: "/edit/:id",
                element: <Record />,
            },
        ],
    },
    {
        path: "/create",
        element: <App />,
        children: [
            {
                path: "/create",
                element: <Record />,
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
      <RouterProvider router={router} />
  </React.StrictMode>,
)
