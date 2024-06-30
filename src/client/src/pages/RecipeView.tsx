import RecipeTitle from "../components/RecipeTitle";
import AddButton from "../components/AddButton";
import TagContainer from "../components/TagContainer";
import IngredientsContainer from "../components/IngredientsContainer";
import CookingDirections from "../components/CookingDirections";
import CookingDetails from "../components/CookingDetails";
import RecipeViewGallery from "../components/RecipeViewGallery";
import { useParams } from "react-router-dom";
import { Meal } from "../models/datamodels/Meal";
import { getImageUrl, getTags } from "../utils/assetHelper";
import FavoriteButton from "../components/FavoriteButton";
import { useEffect, useState } from "react";
import api from "../utils/api";

const RecipeView = () => {
  const { id } = useParams<{ id: string }>();
  const [meal, setMeal] = useState<Meal | null>(null);

  useEffect(() => {
    const fetchMeal = async () => {
      try {
        const response = await api.get(`/meal/${id}`);
        setMeal(response.data);
      } catch (error) {
        console.error("Error fetching meal:", error);
      }
    };
    fetchMeal();
  }, [id]);

  if (!meal) {
    return <div>Loading...</div>;
  }
  const tags = getTags(meal);
  const allImages = meal.extraImage
    ? [...meal.extraImage, meal.mainImage]
    : [meal.mainImage];

  const imgSrc = allImages.map((p) => getImageUrl(p));

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
            {meal.recipe && (
              <IngredientsContainer ingredients={meal.recipe.ingredients} />
            )}
            <div className="flex-shrink-0 -ml-10">
              {meal.recipe && (
                <CookingDetails
                  details={[
                    meal.recipe.cookTimeInfo,
                    meal.recipe.difficulty,
                    meal.recipe.cookConditionInfo,
                  ]}
                />
              )}
            </div>
          </div>
          {meal.recipe && (
            <CookingDirections description={meal.recipe.cookDescription} />
          )}
        </div>
        <div className="hidden lg:flex w-3/4 p-10">
          <RecipeViewGallery images={imgSrc} />
        </div>
      </div>
    </div>
  );
};

export default RecipeView;
