import React from "react";
import heartImage from "../assets/heart.png";

const FavouriteButton = () => {
  return (
    <div>
      <button
        type="submit"
        className="border-2 border-border-blue rounded-2xl mr-2 ml-0 my-2"
      >
        <img src=".\src\assets\heart.png" alt="Add" className="w-10 h-10" />
      </button>
    </div>
  );
};

export default FavouriteButton;
