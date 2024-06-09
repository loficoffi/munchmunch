import React from "react";
import Tag from "./Tag.tsx";

const tags = [
    { name: "asiatisch", color: "#B27777" },
    { name: "vegetarisch", color: "#3F8345" }
];

const TagContainer = () => {
    return(
        <div class="flex flex-row">
            {tags.map((tag, index)  => (
                <Tag key={index} tagName={tag.name} color={tag.color}/>
            ))}
        </div>
    );
}

export default TagContainer;