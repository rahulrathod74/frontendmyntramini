import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const CategoryDropdown = ({ title, items}) => {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => {
    setOpen(!open);
  };
  const navigate=useNavigate()
  const handleItemClick=(item)=>{
    if(item === "T-Shirt"){
        navigate('/men-tshirt')
    }
  }
  return (
    <div className="relative cursor-pointer">
      <h1 className="ml-8" onClick={toggleDropdown}>
        {title}
      </h1>
      {open && (
        <div className="absolute left-0 mt-2 bg-white shadow-lg border rounded-md p-2">
          {items.map((item, index) => (
            <div
              key={index}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleItemClick(item)}
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryDropdown;
