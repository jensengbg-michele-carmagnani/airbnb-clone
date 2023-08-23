import React from "react";
import { IconType } from "react-icons";

type CategoryBoxProps = {
  icon: IconType;
  lable: string;
  selected: boolean;
};

const CategoryBox: React.FC<CategoryBoxProps> = ({
  icon: Icon,
  lable,
  selected,
}) => {
  return (
    <div
      key={lable}
      className={`
    flex 
    flex-col 
    items-center 
    justify-center 
    gap-2 p-3 
    border-b-2 
    hover:text-neutral-800 
    transition 
    cursor-pointer  
    ${selected ? "border-neutral-800" : "border-transparent"}
    ${selected ? "text-neutral-800" : "text-neutral-500"}`}
    >
      <Icon size={26} />
      <div className="font-medium text-sm">{lable}</div>
    </div>
  );
};

export default CategoryBox;
