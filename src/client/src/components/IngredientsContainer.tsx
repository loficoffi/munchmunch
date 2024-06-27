import React from "react";

const IngredientsContainer = ({ ingredients }) => {
  return (
    <div className="mx-2">
      <h3 className="text-white text-xl md:text-2xl lg:text-3xl">Zutaten</h3>
      <ul className="list-disc mx-4 lg:mx-9 my-3">
        {ingredients.map((ingredient, index) => (
          <li key={index} className="text-white text-l lg:text-xl">
            {ingredient.amount} {ingredient.unit} {ingredient.ingredient.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientsContainer;
