import React from "react";

const CookingDirections = ({ description }) => {
  return (
    <div>
      <h3 className="text-white text-xl md:text-2xl lg:text-3xl">
        Zubereitung
      </h3>
      <p className="text-white text-l lg:text-xl mx-3 my-3">{description}</p>
    </div>
  );
};

export default CookingDirections;
