import React from "react";
import heartIconImage from '../assets/heartRed.png';

const FavoriteButton = () => {
  return (
    <div>
      <button
        type="submit"
        className="munch-mng-button fav-button border-2 rounded-2xl bg-black w-12 h-12 flex justify-center items-center">
        <img src={heartIconImage} alt="Add" className="w-8 h-8" />
      </button>
    </div>
  );
};

export default FavoriteButton;
