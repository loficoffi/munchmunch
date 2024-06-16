import React from 'react';
import TagContainer from "../components/TagContainer.tsx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSeedling, faDrumstickBite, faFish } from '@fortawesome/free-solid-svg-icons';
import '../index.css';

export const MyRecipes = () => {
    //array for the food category tags to render them in the tag-container
    const tags = [
        { name: 'Veggie', icon: <FontAwesomeIcon icon={faSeedling} />, backgroundColor: 'bg-veggie-green text-vegan-yellow', onClick: () => getRecipesFromTag('Veggie') },
        { name: 'Vegan', icon: <FontAwesomeIcon icon={faSeedling} />, backgroundColor: 'bg-vegan-yellow text-veggie-green', onClick: () => getRecipesFromTag('Vegan') },
        { name: 'Fleisch', icon: <FontAwesomeIcon icon={faDrumstickBite} />, backgroundColor: 'bg-meat-rosa text-white', onClick: () => getRecipesFromTag('Fleisch') },
        { name: 'Fisch', icon: <FontAwesomeIcon icon={faFish} />, backgroundColor: 'bg-fish-blue text-white', onClick: () => getRecipesFromTag('Fisch') },
    ];

    //TODO: implemented function for getting all recipes with the clicked tag
    const getRecipesFromTag = (tagName: string) => {
        console.log(`Tag ${tagName} is clicked!`);
    };

    return (
        <div>
            <div className="myrecipes-container text-center mt-10 ml-0 mt-5 md:text-left md:ml-14">
                <div className="favorite-recipes">
                    <h1 className="text-2xl">
                        Lieblingsrezepte
                    </h1>
                    <div className="mt-5 ml-7 md:ml-0">
                        <TagContainer tags={tags}/>
                    </div>
                    <div className="mt-5">
                        Hier kommen die Foodtiles hin!
                    </div>
                </div>
                <div className="saved-recipes mt-10">
                    <h1 className="text-2xl">
                        Gemerkte Rezepte
                    </h1>
                    <div className="mt-5 ml-7 md:ml-0">
                        <TagContainer tags={tags}/>
                    </div>
                    <div className="mt-5">
                        Hier kommen die Foodtiles hin!
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MyRecipes