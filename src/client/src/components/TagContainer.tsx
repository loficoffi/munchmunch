import React from "react";
import Tag from "./Tag.tsx";

interface TagContainerProps {
  tags: {
    name: string;
    icon?: any;
    backgroundColor: string;
    textColor?: string;
    onClick?: () => void;
  }[];
}

const TagContainer: React.FC<TagContainerProps> = ({ tags }) => {
  return (
    //tags.map is for rendering more than one tags in tag-container
    <div className="flex flex-wrap gap-2 mb-5">
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
