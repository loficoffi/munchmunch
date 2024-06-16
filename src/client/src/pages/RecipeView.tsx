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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSeedling,
  faDrumstickBite,
  faFish,
} from "@fortawesome/free-solid-svg-icons";

const RecipeView = () => {
  const tags = [
    {
      name: "Veggie",
      icon: <FontAwesomeIcon icon={faSeedling} />,
      backgroundColor: "bg-veggie-green text-vegan-yellow",
      onClick: () => getRecipesFromTag("Veggie"),
    },
    {
      name: "Vegan",
      icon: <FontAwesomeIcon icon={faSeedling} />,
      backgroundColor: "bg-vegan-yellow text-veggie-green",
      onClick: () => getRecipesFromTag("Vegan"),
    },
    {
      name: "Fleisch",
      icon: <FontAwesomeIcon icon={faDrumstickBite} />,
      backgroundColor: "bg-meat-rosa text-white",
      onClick: () => getRecipesFromTag("Fleisch"),
    },
    {
      name: "Fisch",
      icon: <FontAwesomeIcon icon={faFish} />,
      backgroundColor: "bg-fish-blue text-white",
      onClick: () => getRecipesFromTag("Fisch"),
    },
  ];

  const getRecipesFromTag = (tagName: string) => {
    console.log(`Tag ${tagName} is clicked!`);
  };

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
          <TagContainer tags={tags} />
          <div className="flex flex-row mb-2">
            <IngredientsContainer />
            <CookingDetails />
          </div>
          <CookingDirections />
        </div>
        <div className="w-2/4 p-2 flex items-center">
          <RecipeViewGallery />
        </div>
      </div>
    </div>
  );
};

export default RecipeView;
