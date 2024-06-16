import React from "react";
import Navbar from "../components/Navbar.jsx";
import RecipeTitle from "../components/RecipeTitle.jsx";
import AddButton from "../components/AddButton.jsx";
import FavouriteButton from "../components/FavouriteButton.jsx";
import TagContainer from "../components/TagContainer.jsx";
import IngredientsContainer from "../components/IngredientsContainer.jsx";
import CookingDirections from "../components/CookingDirections.jsx";
import CookingDetails from "../components/CookingDetails.jsx";
import RecipeViewGallery from "../components/RecipeViewGallery.jsx";

const tags = [
  { name: "schismatic", color: "#B27777" },
  { name: "vegetarisch", color: "#3F8345" },
];

const RecipeView = () => {
  const recipeTitle = "Knusprige Entenbrust Süss Sauer";
  return (
    <div className="bg-black font-sans min-h-screen flex flex-col">
      <div className="flex flex-row justify-center p-4">
        <div className="w-2/4 p-4">
          <RecipeTitle recipeTitle={recipeTitle} />
          <div className="flex flex-row mb-4">
            <AddButton />
            <FavouriteButton />
          </div>
          {/*<TagContainer/>*/}
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
