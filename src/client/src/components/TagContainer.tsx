import React from "react";
import Tag from "./Tag.tsx";

const tags = [
  { name: "asiatisch", color: "#B27777" },
  { name: "vegetarisch", color: "#3F8345" },
];

interface TagContainerProps {
  tags: {
    name: string;
    icon?: React.ReactNode;
    backgroundColor: string;
    onClick?: () => void;
  }[];
}

const TagContainer: React.FC<TagContainerProps> = ({ tags }) => {
  return (
    //tags.map is for rendering more than one tags in tag-container
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, index) => (
        <Tag
          key={index}
          name={tag.name}
          icon={tag.icon}
          backgroundColor={tag.backgroundColor}
          onClick={tag.onClick}
        />
      ))}
    </div>
  );
};

export default TagContainer;
