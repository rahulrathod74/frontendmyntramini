import React from "react";

const HomeLivingComponent = ({ category }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{category}</h1>
      <p>Displaying products for {category} in Home & Living...</p>
    </div>
  );
};

export default HomeLivingComponent;
