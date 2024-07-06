import React from "react";
import { useNavigate } from "react-router-dom";
import "react-tooltip/dist/react-tooltip.css";
import { Meal } from "../models/datamodels/Meal";
import { getImageUrl, getTags } from "../utils/assetHelper.ts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLeaf,
  faFish,
  faDrumstickBite,
  faCarrot,
} from "@fortawesome/free-solid-svg-icons";
import "../index.css";
import mealTileFallback from "../assets/images/mealTileFallback.png";
import FavoriteButton from "./FavoriteButton.tsx";
import TagContainer from "./TagContainer.tsx";

// Interface for the meal category props for using them in another page
interface MealTileProps {
  meal: Meal;
}

// Defining icons for diet types, which will be displayed in the left top corner
const dietIcons: any = {
  fish: [faFish, "#c085ff"],
  meat: [faDrumstickBite, "#ff8585"],
  veggie: [faCarrot, "#b8ff85"],
  vegan: [faLeaf, "#87ff85"],
};

// Function for getting a random image for the recipe everytime the meal tile renders
function randomImg(imagePaths: string[]): string {
  return imagePaths[Math.floor(Math.random() * imagePaths.length)];
}

// Mealtile component, which displays a random image and has a click function to get to the right
// recipe. Tile also shows details like name, cuisine and diettype when hovering over
const MealTile: React.FC<MealTileProps> = ({ meal }) => {
  const allImages = [...meal.extraImage, meal.mainImage];
  const [imgSrc, setImgSrc] = React.useState(getImageUrl(randomImg(allImages)));
  const navigate = useNavigate();

  const handleError = () => {
    setImgSrc(mealTileFallback);
  };

  const handleClick = () => {
    navigate(
      `/recipe/${meal.id}/${meal.name
        .toString()
        .replace(" ", "_")
        .toLowerCase()}`,
      { state: { meal } }
    );
  };

  return (
    <div
      onClick={handleClick}
      className="meal-categories-swiper cursor-pointer meal-tile relative group overflow-hidden rounded-2xl w-full h-80"
    >
      <img
        src={imgSrc}
        alt={meal.name}
        onError={handleError}
        className="w-full h-full transition-transform duration-300 ease-in-out transform group-hover:scale-110 rounded-lg object-cover"
      ></img>
      <div className="absolute w-12 h-12 top-0 left-0 bg-black bg-opacity-70 text-white p-1 rounded-br-full flex justify-center items-center pr-3 pb-3">
        <FontAwesomeIcon
          icon={dietIcons[meal.diet][0]}
          color={dietIcons[meal.diet][1]}
          size="lg"
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
        <div className="text-white text-2xl">
          <div>{meal.name}</div>
          <div className="my-5">
            <TagContainer tags={getTags(meal)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealTile;
