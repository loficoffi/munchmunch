import React from "react";
import plusIconImage from '../assets/plusIcon.png';

const AddButton = () => {
  return (
    <div>
      <button
        type="submit"
        className="munch-mng-button border-2 rounded-2xl bg-black w-12 h-12 flex justify-center items-center">
        <img src={plusIconImage} alt="Add" className="w-8 h-8" />
      </button>
    </div>
  );
};

export default AddButton;
