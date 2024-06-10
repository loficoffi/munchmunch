import React from "react";

const AddButton = () => {
    return(
        <div>
            <button type="submit" className="border-2 rounded-2xl">
                <img src=".\src\assets\plusIcon.png" alt="Add" className="w-12 h-12"/>
            </button>
        </div>
    )
}

export default AddButton;