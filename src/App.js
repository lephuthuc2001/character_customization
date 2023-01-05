import logo from "./logo.svg";
import React, { useState, useEffect } from "react";

import "./App.css";
import Category from "./component/Category";
import Options from "./component/Options";
import Display from "./component/Display";

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

function App() {
  const [currentCategory, setCurrentCategory] = useState("body");
  const [display, setDisplay] = useState([]);

  useEffect(() => {
    randomHandler(true);
  }, []);
  const randomHandler = (isRandom) => {
    const randomSet = [];
    for (const type in total) {
      const randomItem = Math.floor(Math.random() * total[type]);
      randomSet.push({
        img_src: require(`./character/${type}/${
          randomItem > 0 ? randomItem : randomItem + 1
        }.png`),
        type: type,
      });
    }
    setDisplay(randomSet);
  };

  const choosingCategoryHandler = (cate) => {
    setCurrentCategory(cate);
  };

  const addToDisplayHandler = (img_src, type) => {
    const sameType = display.find((item) => item.type === type);
    if (sameType) {
      setDisplay((prev) => {
        const newDisplay = prev.filter((item) => item.type !== type);
        return [
          ...newDisplay,
          {
            img_src: img_src,
            type: type,
          },
        ];
      });
    } else {
      setDisplay([
        ...display,
        {
          img_src: img_src,
          type: type,
        },
      ]);
    }
  };
  return (
    <div className="App">
      <Category onChoosingCategory={choosingCategoryHandler} />
      <Options cate={currentCategory} onAddToDisplay={addToDisplayHandler} />
      <Display displayedItems={display} onRandom={randomHandler} />
    </div>
  );
}

export default App;
