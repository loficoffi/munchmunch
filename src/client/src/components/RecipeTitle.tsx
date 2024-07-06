import React from "react";

// Interface for the recipe title props for using them in another page
interface RecipeTitleProps {
  recipeTitle: string;
}

//Recipe title component for displaying the title of a recipe in RecipeView
const RecipeTitle: React.FC<RecipeTitleProps> = ({ recipeTitle }) => {
  return <h2 className="text-white text-6xl mb-5">{recipeTitle}</h2>;
};

export default RecipeTitle;
