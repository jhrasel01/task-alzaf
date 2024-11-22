"use client";

import useCustomSWR from "@/components/hooks/useCustomSWR";
import { CustomLoading } from "@/components/UI";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export const Category = () => {
  const [active, setActive] = useState({
    category: null,
    subCategory: null,
    subSubCategory: null,
    subSubSubCategory: null,
    subSubSubSubCategory: null,
  });

  // Fetch data
  const { data, error, isLoading, mutate } = useCustomSWR(
    "/public/hero-categories"
  );

  if (isLoading) {
    return <CustomLoading />;
  }

  const arrowIcon = (hasChildren) => {
    return hasChildren ? (
      <span>
        <IoIosArrowDown />
      </span>
    ) : null;
  };

  // Handle mouse enter
  const handleMouseEnter = (level, id) => {
    setActive((prevState) => ({ ...prevState, [level]: id }));
  };

  // Handle mouse leave
  const handleMouseLeave = (level) => {
    setActive((prevState) => ({ ...prevState, [level]: null }));
  };

  const renderSubcategories = (category, level, nextLevel) => {
    return (
      <div className="absolute top-0 left-full h-full bg-white border-l border-custom-border w-[230px] text-sm">
        <ul>
          {category.childrens &&
            category.childrens.map((subcategory, subcategoryIndex) => (
              <li
                key={subcategory.id}
                onMouseEnter={() => handleMouseEnter(nextLevel, subcategory.id)}
                onMouseLeave={() => handleMouseLeave(nextLevel)}
              >
                <a className="flex items-center gap-2 px-3 py-1">
                  {subcategory.title}
                  {arrowIcon(
                    subcategory.childrens && subcategory.childrens.length > 0
                  )}
                </a>

                {/* Recursive call to render next level */}
                {active[nextLevel] === subcategory.id &&
                  subcategory.childrens &&
                  subcategory.childrens.length > 0 &&
                  renderSubcategories(
                    subcategory,
                    nextLevel,
                    getNextLevel(nextLevel)
                  )}
              </li>
            ))}
        </ul>
      </div>
    );
  };

  const getNextLevel = (currentLevel) => {
    switch (currentLevel) {
      case "category":
        return "subCategory";
      case "subCategory":
        return "subSubCategory";
      case "subSubCategory":
        return "subSubSubCategory";
      case "subSubSubCategory":
        return "subSubSubSubCategory";
      default:
        return "";
    }
  };

  return (
    <div className="w-full relative text-sm py-1 h-full">
      <ul className="flex flex-col">
        {data?.map((category) => (
          <li
            key={category.id}
            onMouseEnter={() => handleMouseEnter("category", category.id)}
            onMouseLeave={() => handleMouseLeave("category")}
          >
            <a className="flex items-center gap-2 px-3 py-1">
              {category.title}
              {arrowIcon(category.childrens && category.childrens.length > 0)}
            </a>

            {/* Subcategory */}
            {active.category === category.id &&
              category.childrens &&
              category.childrens.length > 0 &&
              renderSubcategories(category, "category", "subCategory")}
          </li>
        ))}
      </ul>
    </div>
  );
};
