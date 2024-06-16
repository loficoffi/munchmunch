import React from "react";

const ingredients = ["6 Eier", "500g Mehl", "Entenbrust", "Reis", "Süss-Sauer Sauce"]

const IngredientsContainer = () => {
    return(
        <div class="mx-2">
            <h3 class="text-white text-4xl">Zutaten</h3>
            <ul class="list-disc mx-9 my-5">
                {ingredients.map((ingredient, index) => (
                    <li key={index} class="text-white text-2xl">{ingredient}</li>
                ))}
            </ul>
        </div>
    );
}

export default IngredientsContainer;