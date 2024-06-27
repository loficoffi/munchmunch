import React from "react";

interface CookingDetailsProps {
  details: string[];
}

const CookingDetails: React.FC<CookingDetailsProps> = ({ details }) => {
  return (
    <div className="text-white text-l md:text-xl border-2 rounded-xl border-white p-2 md:p-3 lg:p-5 ml-10 md:ml-60">
      {details.map((detail, index) => (
        <div key={index}>{detail}</div>
      ))}
    </div>
  );
};

export default CookingDetails;
