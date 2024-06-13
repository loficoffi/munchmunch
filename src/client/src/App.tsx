import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./index.css"

const App = () => {
    return (
        <div className="w-full">
            <div>
                <Navbar/>
            </div>
            <div className="main-content-container">
                <Outlet/>
            </div>
        </div>
    );
};
export default App
