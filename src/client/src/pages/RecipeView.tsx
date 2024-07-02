import RecipeTitle from "../components/RecipeTitle";
import AddButton from "../components/AddButton.tsx";
import TagContainer from "../components/TagContainer";
import IngredientsContainer from "../components/IngredientsContainer";
import CookingDirections from "../components/CookingDirections";
import CookingDetails from "../components/CookingDetails";
import RecipeViewGallery from "../components/RecipeViewGallery";
import { useParams } from "react-router-dom";
import { Meal } from "../models/datamodels/Meal";
import { getImageUrl, getTags } from "../utils/assetHelper";
import FavoriteButton from "../components/FavoriteButton.tsx";
import React, { useEffect, useState } from "react";
import api, {setAuthToken} from "../utils/api.ts";
import {
  faUtensils,
  faHeart,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import {fetchUserData} from "../services/accountService.ts";
import {Account} from "../models/datamodels/Account.ts";

const RecipeView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [meal, setMeal] = useState<Meal | null>(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [faveMealWasAdded, setFaveMealAddStatus] = useState<boolean | null>(false);
  const [savedMealWasAdded, setSavedMealAddStatus] = useState<boolean | null>(false);

  const [userData, setUserData] = useState<Account | null>(null);

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

  //get userdata if token exists
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuthToken(token);
      fetchUserData().then(userData => {
        setUserData(userData);
        setLoading(false);

        //check if mealoftheday already exists in users account for setting the right icon in add and fave button
        //with function "some" it gives true or false back
        const faveMealExistsAlready = userData.profile.favouriteMeals.some(meal => meal.id == id);
        setFaveMealAddStatus(faveMealExistsAlready);

        const saveMealExistsAlready = userData.profile.savedMeals.some(meal => meal.id == id);
        setSavedMealAddStatus(saveMealExistsAlready);

      }).catch(err => {
        setError('No user is logged in.');
        setLoading(false);
      });
    }
  }, [id]);

  if (!meal) {
    return <div>Loading...</div>;
  }

  const tags = getTags(meal);
  const allImages = meal.extraImage
    ? [...meal.extraImage, meal.mainImage]
    : [meal.mainImage];

  const imgSrc = allImages.map((p) => getImageUrl(p));

  const addFavoriteMeal = async () => {

    try {
      const checkIfMealExists = userData.profile.favouriteMeals.some(meal => meal.id == id);
      let updateFavouriteMeals: Meal[];

      if (checkIfMealExists)
      {
        //get a new array with filter without the one which was in it
        updateFavouriteMeals = userData.profile.favouriteMeals.filter(meal => meal.id !== id);
        setFaveMealAddStatus(false);
      }
      else
      {
        //add meal to favourite meals
        updateFavouriteMeals = [...userData.profile.favouriteMeals, meal];
        setFaveMealAddStatus(true);
      }

      //create an updated profile in account with added favorite recipe
      const updatedProfile = {
        ...userData.profile,
        favouriteMeals: updateFavouriteMeals
      };

      //create an updated account with updated profile
      const updatedUser = {
        ...userData,
        profile: updatedProfile
      };

      //also update it in backend
      const response = await api.post('/meal/updateProfile', updatedUser);
      console.log(response.data);

      setUserData(updatedUser); //update userdata in frontend
    } catch (error) {
      console.error('Error updating user profile:', error);
    }
  }

  const addSavedMeal = async () => {

    try {
      const checkIfSavedMealExists = userData.profile.savedMeals.some(meal => meal.id == id);
      let updateSavedMeals: Meal[];

      if (checkIfSavedMealExists)
      {

        //get a new array without the one which was in it
        updateSavedMeals = userData.profile.savedMeals.filter(meal => meal.id !== id);
        setSavedMealAddStatus(false);
      }
      else
      {
        //add meal to favourite meals
        updateSavedMeals = [...userData.profile.savedMeals, meal];
        setSavedMealAddStatus(true);
      }

      //create an updated profile in account with added favorite recipe
      const updatedProfile = {
        ...userData.profile,
        savedMeals: updateSavedMeals
      };

      //create an updated account with updated profile
      const updatedUser = {
        ...userData,
        profile: updatedProfile
      };

      //also update it in backend
      const response = await api.post('/meal/updateProfile', updatedUser);
      console.log(response.data);

      setUserData(updatedUser); //update userdata in frontend
    } catch (error) {
      console.error('Error updating user profile: ', error);
    }
  }

  return (
    <div className="bg-black font-sans min-h-screen flex flex-col">
      <div
        className="lg:hidden bg-cover bg-center p-4"
        style={{ backgroundImage: `url(${getImageUrl(meal.mainImage)})` }}
      >
        <div className="bg-black bg-opacity-50 p-4">
          <RecipeTitle recipeTitle={meal.name} />
          {userData &&
              <div className="flex flex-row mb-5">
                <AddButton onClick={addSavedMeal} icon={savedMealWasAdded && userData && userData.profile ? faMinus : faPlus} />
                <FavoriteButton
                    onClick={addFavoriteMeal}
                    icon={faveMealWasAdded && userData && userData.profile ? faHeart : farHeart}
                />
              </div>
          }
          <TagContainer tags={tags} />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center p-4">
        <div className="w-full lg:w-2/4 p-4">
          <div className="hidden lg:block">
            <RecipeTitle recipeTitle={meal.name} />
            {userData &&
              <div className="flex flex-row mb-5">
                <AddButton onClick={addSavedMeal} icon={savedMealWasAdded && userData && userData.profile ? faMinus : faPlus} />
                <FavoriteButton
                    onClick={addFavoriteMeal}
                    icon={faveMealWasAdded && userData && userData.profile ? faHeart : farHeart}
                />
              </div>
            }
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
