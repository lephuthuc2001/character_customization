import React from "react";
import imgWrapperStyle from "./ImageWrapper.module.css";
function ImageWrapper({ img_src, alt, id, onAddToDisplay }) {
  return (
    <div className={imgWrapperStyle.wrapper}>
      <img
        src={img_src}
        alt={alt}
        id={id}
        onClick={() => {
          onAddToDisplay(img_src, id);
        }}
      />
    </div>
  );
}

export default ImageWrapper;
