import React from "react";
import heartIconImage from '../assets/heartRed.png';

const FavoriteButton = ( { onClick }) => {

    const handleClick = () => {
        //go into onClick function which was given from component
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
        <img src={heartIconImage} alt="Add" className="w-8 h-8" />
      </button>
    </div>
  );
};

export default FavoriteButton;
