import React from "react";
import logo from "../images/logo.png";
import icon from "../images/icon.png";
import account from "../images/account.png";
import out from "../images/logout.png";
import { Link } from "react-router-dom";
import CategoryDropdown from "./CategoryDropdown";

const Navbar = () => {
  return (
    <div className="flex text-sm font-bold text-gray-700 items-center p-4 shadow-lg">
      <img src={logo} alt="myntra-logo" className="w-20 h-12 ml-5" />
      <CategoryDropdown
        title="MEN"
        items={["T-Shirt", "Jacket", "Pant", "Suit"]}
      />
      <CategoryDropdown
        title="WOMEN"
        items={["Dress", "Saree", "Tops", "Skirts"]}
      />
      <CategoryDropdown
        title="KIDS"
        items={["Shirts", "Shorts", "Dresses", "Shoes"]}
      />
      <CategoryDropdown
        title="HOME & LIVING"
        items={["Furniture", "Decor", "Bedsheets", "Cushions"]}
      />
      <CategoryDropdown
        title="BEAUTY"
        items={["Makeup", "Skincare", "Haircare", "Fragrances"]}
      />
      <CategoryDropdown title="STUDIO" items={["Videos", "Articles", "Trends"]} />
      <div className="border border-gray-100 flex items-center bg-gray-100 w-96 h-10 ml-auto">
        <img src={icon} alt="search-icon" className="w-3 h-3 ml-4" />
        <input
          className="bg-gray-100 text-gray-900 font-normal outline-none text-sm rounded-sm block w-full p-2.5 ml-3"
          placeholder="Search for products"
          required
        />
      </div>
      <Link to="/login">
        <div className="ml-6 text-xs">
          <img src={account} alt="account" className="w-5 h-5 ml-2" />
          <h1>Login</h1>
        </div>
      </Link>
      <div className="ml-6 text-xs">
        <img src={out} alt="logout" className="w-4 h-4 ml-2" />
        <h1>Logout</h1>
      </div>
    </div>
  );
};

export default Navbar;

