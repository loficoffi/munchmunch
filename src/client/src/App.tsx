import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./index.css"
import { useEffect } from "react";
import {setAuthToken} from "./utils/api.ts";

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
