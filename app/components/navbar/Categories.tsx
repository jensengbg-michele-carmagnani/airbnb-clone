import React from "react";
import { Container } from "../Container";
import { TbBeach } from "react-icons/tb";
import { GiWindmill } from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import CategoryBox from "./CategoryBox";
export const CATEGORIES = [
  {
    lable: "Beach",
    icon: TbBeach,
    description: "this property is close to the beach!",
  },
  {
    lable: "Windmills",
    icon: GiWindmill,
    description: "this property is close to the windmills!",
  },
  {
    lable: "Beach",
    icon: MdOutlineVilla,
    description: "this property is close to the beach!",
  },
];

type Props = {};

const Categories = (props: Props) => {
  return (
    <Container>
      <div
        className="
      pt-4 
      flex 
      flex-row 
      items-center 
      justify-between 
      overflow-x-auto"
      >
        {CATEGORIES.map((item) => (
          <CategoryBox
            key={item.lable}
            lable={item.lable}
            selected={false}
            icon={item.icon}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
