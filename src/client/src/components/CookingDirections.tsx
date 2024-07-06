import React from "react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// Cooking directions component for displaying a step-for-step instruction how to
// cook the recipe, written in markdown
const CookingDirections = ({ description }) => {
    return (
        <div>
            <h3 className="text-white text-xl md:text-2xl lg:text-3xl">
                Zubereitung
            </h3>
            <div className="text-white mx-3 my-3 markdown-style">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {description}
                </ReactMarkdown>
            </div>
        </div>
    );
};

export default CookingDirections;
