import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface TagProps {
  name: string;
  icon?: any;
  textColor?: string;
  iconColor?: string;
  backgroundColor: string;
  onClick?: () => void;
}
const Tag: React.FC<TagProps> = ({
  name,
  icon,
  backgroundColor,
  textColor,
  onClick,
}) => {
  return (
    <div
      className="p-1 rounded-lg text-sm text-center w-24 cursor-pointer"
      onClick={onClick}
      style={{ backgroundColor, color: textColor }} // Hier setzen Sie den Hintergrundfarbe als Inline-Stil
    >
      {icon && (
        <span className="mr-2">
          <FontAwesomeIcon icon={icon} />
        </span>
      )}
      <span>{name}</span>
    </div>
  );
};

export default Tag;
