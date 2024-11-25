import React from "react";
import "./Sidebar.css";

const menuItems = [
  { name: "Tokenomics", link: "#" },
  { name: "MoonSea", link: "#" },
  { name: "Moonshot", link: "#" },
];

const SideMenu = () => {
  return (
    <div>
      {/* Sidebar Menu */}
      <ul className="sidebarMenu list-none p-0 flex items-center inline-flex flex-row fixed top-[13rem] right-[-9.4rem] transform -rotate-90">
        {menuItems.map((item, index) => (
          <li key={index} className="relative">
            <a
              href={item.link}
              className="text-slate-900 hover:text-white block py-2 px-4 transition-all"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideMenu;
