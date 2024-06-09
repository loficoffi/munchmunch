import React from "react";

const AddButton = () => {
    return(
        <div>
            <button type="submit" class="border-2 rounded-2xl mr-2 ml-2 my-2">
                <img src=".\src\assets\plusIcon.png" alt="Add" className="w-12 h-12"/>
            </button>
        </div>
    )
}

export default AddButton;