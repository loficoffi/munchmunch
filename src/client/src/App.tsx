import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import RecipeView from "./pages/RecipeView.tsx";

const App = () => {
    return (
        <div className="w-full p-6">
            <RecipeView/>
        </div>
    );
};
export default App
