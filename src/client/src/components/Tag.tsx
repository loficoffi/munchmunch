import React from "react";

interface TagProps {
    tagName: string;
    color: string;
}

const Tag: React.FC<TagProps> = ({tagName, color}) => {
    return(
        <div class="text-white text-2xl rounded-2xl px-6 py-1 mx-2 my-5" style={{backgroundColor: color}}>{tagName}</div>
    )
}

export default Tag;