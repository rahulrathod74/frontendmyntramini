import React from "react";

const BeautyComponent = ({ category }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{category}</h1>
      <p>Displaying products for {category} in Beauty...</p>
    </div>
  );
};

export default BeautyComponent;
