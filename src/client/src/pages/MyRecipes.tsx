import React from "react";
import TagContainer from "../components/TagContainer.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSeedling,
  faDrumstickBite,
  faFish,
} from "@fortawesome/free-solid-svg-icons";
import "../index.css";

export const MyRecipes = () => {
  //array for the food category tags to render them in the tag-container
  const tags = [
    {
      name: "Veggie",
      icon: faSeedling,
      backgroundColor: "#3F8345",
      onClick: () => getRecipesFromTag("Veggie"),
    },
    {
      name: "Vegan",
      icon: faSeedling,
      backgroundColor: "#FFF734",
      textColor: "#000000",
      onClick: () => getRecipesFromTag("Vegan"),
    },
    {
      name: "Fleisch",
      icon: faDrumstickBite,
      backgroundColor: "#B27777",
      onClick: () => getRecipesFromTag("Fleisch"),
    },
    {
      name: "Fisch",
      icon: faFish,
      backgroundColor: "#6881DB",
      onClick: () => getRecipesFromTag("Fisch"),
    },
  ];

  //TODO: implemented function for getting all recipes with the clicked tag
  const getRecipesFromTag = (tagName: string) => {
    console.log(`Tag ${tagName} is clicked!`);
  };

  return (
    <div>
      <div className="myrecipes-container text-center mt-10 ml-0 mt-5 md:text-left md:ml-14">
        <div className="favorite-recipes">
          <h1 className="text-2xl">Lieblingsrezepte</h1>
          <div className="mt-5 ml-7 md:ml-0">
            <TagContainer tags={tags} />
          </div>
          <div className="mt-5">Hier kommen die Foodtiles hin!</div>
        </div>
        <div className="saved-recipes mt-10">
          <h1 className="text-2xl">Gemerkte Rezepte</h1>
          <div className="mt-5 ml-7 md:ml-0">
            <TagContainer tags={tags} />
          </div>
          <div className="mt-5">Hier kommen die Foodtiles hin!</div>
        </div>
      </div>
    </div>
  );
};

export default MyRecipes;
