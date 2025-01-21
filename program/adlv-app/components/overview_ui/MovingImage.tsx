import React from "react";

const MovingImage = () => {
  return (
    <div className="relative w-full h-40 overflow-hidden">
      <div className="absolute flex w-max animate-marquee">
        <img
          src="/assets/images/tsirt-1.png"
          alt="Image 1"
          className="w-40 h-40 object-cover mr-4"
        />
        <img
          src="/assets/images/tsirt-1.png"
          alt="Image 2"
          className="w-40 h-40 object-cover mr-4"
        />
        <img
          src="/assets/images/tsirt-1.png"
          alt="Image 3"
          className="w-40 h-40 object-cover mr-4"
        />
        <img
          src="/assets/images/tsirt-1.png"
          alt="Image 4"
          className="w-40 h-40 object-cover mr-4"
        />
      </div>
    </div>
  );
};

export default MovingImage;
