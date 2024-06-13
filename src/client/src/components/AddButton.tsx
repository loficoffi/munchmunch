import React from "react";

const AddButton = () => {
    return(
        <div>
            <button type="submit" className="border-2 rounded-2xl bg-black">
                <img src=".\src\assets\plusIcon.png" alt="Add" className="w-10 h-10"/>
            </button>
        </div>
    )
}

export default AddButton;