import React from "react";
import optionStyle from "./Options.module.css";
import ImageWrapper from "./UI/ImageWrapper";

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

function Options({ cate, onAddToDisplay }) {
  const listItems = [];
  const images = {};
  for (let i = 1; i < total[cate]; i++) {
    images[`img_${i}`] = require(`../character/${cate}/${i}.png`);
  }
  for (const img_url in images) {
    listItems.push(
      <ImageWrapper
        key={Math.random().toString(36).substring(6)}
        img_src={images[img_url]}
        alt={img_url}
        id={cate}
        onAddToDisplay={onAddToDisplay}
      />
    );
  }

  return (
    <div className="options">
      <h2>{cate}</h2>
      <div className={optionStyle.container}>
        <ul>{listItems}</ul>
      </div>
    </div>
  );
}

export default Options;
