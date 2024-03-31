"use client";
import React, { useState } from "react";

const Menu = () => {
  const [selectedItem, setSelectedItem] = useState("Home");

  const handleClick = (item) => {
    setSelectedItem(item);
  };

  const menuItems = [
    { label: "Home", key: "Home" },
    { label: "About", key: "About" },
    { label: "Services", key: "Services" },
    { label: "Contact", key: "Contact" },
  ];

  return (
    <div className="px-2 md:px-0 py-3 space-y-2 md:space-y-0 md:space-x-2 font-medium text-slate-700">
      {menuItems.map((menuItem) => (
        <a
          href="#"
          key={menuItem.key}
          className={`block md:inline-block px-3 py-2 rounded-md ${
            selectedItem === menuItem.label
              ? "text-white bg-gray-900"
              : "text-slate-700 hover:text-white hover:bg-gray-700"
          } focus:outline-none focus:text-white focus:bg-gray-700`}
          onClick={() => handleClick(menuItem.label)}
        >
          {menuItem.label}
        </a>
      ))}
    </div>
  );
};

export default Menu;
