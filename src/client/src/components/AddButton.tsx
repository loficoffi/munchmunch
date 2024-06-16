import React from "react";

const AddButton = () => {
  return (
    <div>
      <button
        type="submit"
        className="border-2 rounded-2xl mr-2 ml-2 my-2 bg-black"
      >
        <img src=".\src\assets\plusIcon.png" alt="Add" className="w-10 h-10" />
      </button>
    </div>
  );
};

export default AddButton;
