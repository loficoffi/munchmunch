import React from "react";
import heartIconImage from '../assets/heartRed.png';

const FavoriteButton = () => {
  return (
    <div>
      <button
        type="submit"
        className="border-2 rounded-2xl bg-black">
        <img src={heartIconImage} alt="Add" className="w-10 h-10" />
      </button>
    </div>
  );
};

export default FavoriteButton;
