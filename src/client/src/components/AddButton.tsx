import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

// Add button component for saving meals in your saved list which will
// be displayed in the MyRecipes View when user has logged in
const AddButton = ( {onClick, icon}) => {

    const handleClick = () => {
        if (onClick) {
            onClick();
        }
    };

  return (
    <div>
      <button
        type="submit"
        className="munch-mng-button border-2 rounded-2xl bg-black w-12 h-12 flex justify-center items-center"
        onClick={handleClick}>
          <FontAwesomeIcon icon={icon} className="utensils-icon w-8 h-8" />
      </button>
    </div>
  );
};

export default AddButton;
