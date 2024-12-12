import React from "react";

const WomenComponent = ({ category }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{category}</h1>
      <p>Displaying products for {category} in the Women's section...</p>
    </div>
  );
};

export default WomenComponent;
