import React from "react";
import heartImage from '../assets/heart.png';

const FavouriteButton = () => {
    return (
        <div>
            <button type="submit" className="border-2 border-border-blue rounded-2xl mr-2 ml-0 my-2">
                <img src={heartImage} alt="Add" className="w-12 h-12"/>
            </button>
        </div>
    );
}

export default FavouriteButton;