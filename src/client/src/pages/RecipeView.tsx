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
  const recipeTitle = "Knusprige Entenbrust Süss Sauer";
  return (
    <div className="bg-black font-sans min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-row justify-center p-4">
        <div className="w-2/4 p-4">
          <RecipeTitle recipeTitle={recipeTitle} />
          <div className="flex flex-row mb-4">
            <AddButton />
            <FavouriteButton />
          </div>
          <TagContainer />
          <div className="flex flex-row mb-4">
            <IngredientsContainer />
            <CookingDetails />
          </div>
          <CookingDirections />
        </div>
        <div className="w-2/4 p-4 flex items-center">
          <RecipeViewGallery />
        </div>
      </div>
    </div>
  );
};

export default RecipeView;
