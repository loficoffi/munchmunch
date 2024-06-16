import React from "react";

const detailList = ["30 min", "200C Umluft"];

const CookingDetails = () => {
  return (
    <div>
      <ul className="text-white text-xl border-2 rounded-xl border-white p-5 ml-60">
        {detailList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default CookingDetails;
