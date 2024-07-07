import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./index.css"
import { useEffect } from "react";
import {setAuthToken} from "./utils/api.ts";

// App component that sets up the main structure of the application
// It includes a Navbar and renders nested routes using the Outlet component
// The useEffect hook ensures that the auth token is set when the component mounts
const App = () => {
    useEffect(() => {
        const token = localStorage.getItem('token');
        setAuthToken(token);
    }, []);

    return (
        <div className="w-full">
            <div className="navbar">
                <Navbar/>
            </div>
            <div className="main-content-container">
                <Outlet/>
            </div>
        </div>
    );
};
export default App
