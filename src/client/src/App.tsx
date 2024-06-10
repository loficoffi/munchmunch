import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Register from "./components/Register.tsx";

const App = () => {
    return (
        <div className="w-full">
            <Navbar />
            <Register/>
            <Outlet />
        </div>
    );
};
export default App
