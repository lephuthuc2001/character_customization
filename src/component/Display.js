import React from "react";
import displayStyle from "./Display.module.css";
function Display({ displayedItems, onRandom }) {
  return (
    <div className="display">
      <h1 className="game-title">My Character</h1>
      <div className={displayStyle["avatar-holder"]}>
        {displayedItems.map((item) => {
          return (
            <img
              key={Math.random().toString(36)}
              src={item.img_src}
              className={displayStyle[item.type]}
            />
          );
        })}
      </div>
      <button
        onClick={() => {
          onRandom(true);
        }}
        className={displayStyle.button}
      >
        Randomize
      </button>
    </div>
  );
}

export default Display;
