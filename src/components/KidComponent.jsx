import React from "react";

const KidsComponent = ({ category }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{category}</h1>
      <p>Displaying products for {category} in the Kids' section...</p>
    </div>
  );
};

export default KidsComponent;
