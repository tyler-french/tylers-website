import React from "react";
import { Block } from "baseui/block";

const ArtGallery = () => {
  const artImages = require.context("../public/art", false, /\.(jpg|jpeg|png)$/);

  const imageFileNames = artImages.keys().map((key) => key.replace("./", ""));

  return (
    <div>
      <h2>Art Gallery</h2>
      <Block display="flex" flexWrap="wrap">
        {imageFileNames.map((fileName, index) => (
          <img
            key={index}
            src={artImages(fileName).default}
            alt={`Art ${index + 1}`}
            style={{ width: "200px", height: "200px", margin: "10px" }}
          />
        ))}
      </Block>
    </div>
  );
};

export default ArtGallery;
