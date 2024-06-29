import RecipeTitle from "../components/RecipeTitle.tsx";
import AddButton from "../components/AddButton.tsx";
import TagContainer from "../components/TagContainer.tsx";
import IngredientsContainer from "../components/IngredientsContainer.tsx";
import CookingDirections from "../components/CookingDirections.tsx";
import CookingDetails from "../components/CookingDetails.tsx";
import RecipeViewGallery from "../components/RecipeViewGallery.tsx";
import { useLocation } from "react-router-dom";
import { Meal } from "../models/datamodels/Meal.ts";
import { getImageUrl, getTags } from "../utils/assetHelper.ts";
import FavoriteButton from "../components/FavoriteButton.tsx";

const RecipeView = () => {
  const location = useLocation();
  const { meal } = location.state as { meal: Meal };
  const allImages = [...meal.extraImage, meal.mainImage];

  const imgSrc = allImages.map((p) => getImageUrl(p));

  const tags = getTags(meal);
  console.log(tags);

  return (
    <div className="bg-black font-sans min-h-screen flex flex-col">
      <div
        className="lg:hidden bg-cover bg-center p-4"
        style={{ backgroundImage: `url(${getImageUrl(meal.mainImage)})` }}
      >
        <div className="bg-black bg-opacity-50 p-4">
          <RecipeTitle recipeTitle={meal.name} />
          <div className="flex flex-row mb-4">
            <AddButton />
            <FavoriteButton />
          </div>
          <TagContainer tags={tags} />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center p-4">
        <div className="w-full lg:w-2/4 p-4">
          <div className="hidden lg:block">
            <RecipeTitle recipeTitle={meal.name} />
            <div className="flex flex-row mb-4">
              <AddButton />
              <FavoriteButton />
            </div>
            <TagContainer tags={tags} />
          </div>
          <div className="flex flex-row mb-2 items-start">
            <IngredientsContainer ingredients={meal.recipe.ingredients} />
            <div className="flex-shrink-0 -ml-10">
              <CookingDetails
                details={[
                  meal.recipe.cookTimeInfo,
                  meal.recipe.difficulty,
                  meal.recipe.cookConditionInfo,
                ]}
              />
            </div>
          </div>
          <CookingDirections description={meal.recipe.cookDescription} />
        </div>
        <div className="hidden lg:flex w-3/4 p-10">
          <RecipeViewGallery images={imgSrc} />
        </div>
      </div>
    </div>
  );
};

export default RecipeView;
