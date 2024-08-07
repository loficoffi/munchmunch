import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

// Favorite button component for saving meals in your favorite list which will
// be displayed in the MyRecipes View when user has logged in
const FavoriteButton = ( { onClick, icon}) => {

    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

  return (
    <div>
      <button
        type="submit"
        className="munch-mng-button fav-button border-2 rounded-2xl bg-black w-12 h-12 flex justify-center items-center"
        onClick={handleClick}>
          <FontAwesomeIcon icon={icon} className="utensils-icon w-8 h-8" />
      </button>
    </div>
  );
};

export default FavoriteButton;
