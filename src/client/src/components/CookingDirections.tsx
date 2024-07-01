import React from "react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

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
