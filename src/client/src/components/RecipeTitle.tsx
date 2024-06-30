import React from "react";

interface RecipeTitleProps {
  recipeTitle: string;
}

const RecipeTitle: React.FC<RecipeTitleProps> = ({ recipeTitle }) => {
  return <h2 className="text-white text-6xl mb-5">{recipeTitle}</h2>;
};

export default RecipeTitle;
