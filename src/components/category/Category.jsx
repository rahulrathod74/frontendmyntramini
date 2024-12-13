import React from "react";
import data from "../db.json";
import Card from "../common/Card";

const Category = () => {
  return (
    <>
      <div className="flex w-full">
        {data.middlesections1.map((e) => (
          <Card key={e.id} url={e.url} />
        ))}
      </div>
      
      <div className="flex mt-10 w-full">
        {data.middlesections2.map((e) => (
          <Card key={e.id} url={e.url} />
        ))}
      </div>

      <div className="flex mt-10 w-full">
        {data.middlesections3.map((e) => (
          <Card key={e.id} url={e.url} />
        ))}
      </div>

      <div className="flex mt-10 w-full">
        {data.middlesections4.map((e) => (
          <Card key={e.id} url={e.url} />
        ))}
      </div>

      <div className="flex mt-10 w-full">
        {data.middlesections5.map((e) => (
          <Card key={e.id} url={e.url} />
        ))}
      </div>
    </>
  );
};

export default Category;
