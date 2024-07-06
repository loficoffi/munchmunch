import React from "react";
import Tag from "./Tag.tsx";

// Interface for the tag-container props for using them in another page
interface TagContainerProps {
  tags: {
    name: string;
    icon?: any;
    backgroundColor: string;
    textColor?: string;
    onClick?: () => void;
  }[];
}

// TagContainer component that displays a list of all tags, with map every tag will be
// rendered as a tag-component with the provided props
const TagContainer: React.FC<TagContainerProps> = ({ tags }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-5 mx-auto justify-center md:justify-start">
      {tags.map((tag, index) => (
        <Tag
          key={index}
          name={tag.name}
          icon={tag.icon}
          backgroundColor={tag.backgroundColor}
          textColor={tag.textColor}
          onClick={tag.onClick}
        />
      ))}
    </div>
  );
};

export default TagContainer;
