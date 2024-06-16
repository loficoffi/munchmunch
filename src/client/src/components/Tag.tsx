import React from "react";

interface TagProps {
  name: string;
  icon?: React.ReactNode;
  backgroundColor: string;
  onClick?: () => void;
}
const Tag: React.FC<TagProps> = ({ name, icon, backgroundColor, onClick }) => {
  return (
    <div
      className={`p-1 rounded-lg ${backgroundColor} text-sm text-center w-24 cursor-pointer`}
      onClick={onClick}
    >
      <span className="mr-2">{icon}</span>
      <span>{name}</span>
    </div>
  );
};

export default Tag;
