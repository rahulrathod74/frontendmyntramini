import React from "react";

const MenComponent = ({ category }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{category}</h1>
      <p>Displaying products for {category} in the Men's section...</p>
    </div>
  );
};

export default MenComponent;
