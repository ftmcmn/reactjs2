import React from "react";
import images from "./images.json";
import "./gallery.scss";

const Gallery = () => {
  return (
    <div className="gallery">
      {images.map((image, index) => (
        <div key={index}>
          <a
            href={require(`../../assests/img/${image.name}`)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={require(`../../assests/img/${image.name}`)} width={300} />
          </a>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
