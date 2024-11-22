"use client";

import useCustomSWR from "@/components/hooks/useCustomSWR";
import { CustomLoading } from "@/components/UI";
import Link from "next/link";
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

  // for sub & sub sub & sub sub sub category data
  const showSubCategory = (category, level, nextLevel) => {
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
                <Link
                  href={subcategory.link} // Use the link for subcategories
                  className="flex items-center gap-2 px-3 py-1 hover:text-custom-orang"
                >
                  {subcategory.title}
                  {arrowIcon(
                    subcategory.childrens && subcategory.childrens.length > 0
                  )}
                </Link>

                {/* Show sub-sub category */}
                {active[nextLevel] === subcategory.id &&
                  subcategory.childrens &&
                  subcategory.childrens.length > 0 &&
                  showSubCategory(
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
            <Link
              href={category.link} // Use the link for categories
              className="flex items-center gap-2 px-3 py-1 hover:text-custom-orang"
            >
              {category.title}
              {arrowIcon(category.childrens && category.childrens.length > 0)}
            </Link>

            {/* Subcategory */}
            {active.category === category.id &&
              category.childrens &&
              category.childrens.length > 0 &&
              showSubCategory(category, "category", "subCategory")}
          </li>
        ))}
      </ul>
    </div>
  );
};
