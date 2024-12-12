import React from "react";
import data from "../db.json";
import Category2 from "../category/Category2"
import Category3 from "./Category3";
import Category4 from "./Category4";
import Category5 from "./Category5";
import ProductList from "../ProductList";
const Category = () => {
  return (
    <>
      <div className="flex w-full">
        {data.middlesections1.map((e) => (
          <div key={e.id}>
            <img src={e.url} alt="" />
          </div>
        ))}
      </div>
      {/* <ProductList/> */}
      <Category2/>
      <Category3/>
      <Category4/>
      <Category5/>
      
    </>
  );
};

export default Category;
