import React from "react";
import cateListStyle from "./Category.module.css";
import CategoryItem from "./CategoryItem";

const total = {
  body: 17,
  eyes: 17,
  hair: 73,
  mouths: 24,
  eyebrows: 15,
  hats: 28,
  glasses: 17,
  clothing: 19,
  earrings: 32,
  neckwear: 18,
};

function Category({ onChoosingCategory }) {
  const array = [];
  for (const prop in total) {
    array.push(prop);
  }

  return (
    <div className="category">
      <ul className={cateListStyle["category-group"]}>
        {array.map((cate) => {
          return (
            <CategoryItem
              key={Math.random().toString(36).substring(5)}
              onChoosingCategory={onChoosingCategory}
              id={cate}
            >
              {cate}
            </CategoryItem>
          );
        })}
      </ul>
    </div>
  );
}

export default Category;
