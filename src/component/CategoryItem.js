import React from "react";

function CategoryItem({ onChoosingCategory, children, id }) {
  return (
    <button
      onClick={(e) => {
        onChoosingCategory(id);
      }}
    >
      {children}
    </button>
  );
}

export default CategoryItem;
