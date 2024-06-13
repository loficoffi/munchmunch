import React from "react";
import Navbar from "../components/Navbar.tsx";
import RecipeTitle from "../components/RecipeTitle.tsx";
import AddButton from "../components/AddButton.tsx";
import FavouriteButton from "../components/FavouriteButton.tsx";
import TagContainer from "../components/TagContainer.tsx";
import IngredientsContainer from "../components/IngredientsContainer.tsx";
import CookingDirections from "../components/CookingDirections.tsx";
import CookingDetails from "../components/CookingDetails.tsx";
import RecipeViewGallery from "../components/RecipeViewGallery.tsx";

const RecipeView = () => {
    const recipeTitle : string = "Knusprige Entenbrust Süss Sauer";
    return(
        <div className="bg-black font-sans">
            <Navbar/>
            <RecipeTitle recipeTitle={recipeTitle}/>
            <AddButton/>
            <FavouriteButton/>
            <TagContainer/>
            <IngredientsContainer/>
            <CookingDetails/>
            <CookingDirections/>
            <RecipeViewGallery/>
        </div>
    );
}

export default RecipeView;