import React from "react";

const StudioComponent = ({ category }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{category}</h1>
      <p>Displaying {category} content in Studio...</p>
    </div>
  );
};

export default StudioComponent;
