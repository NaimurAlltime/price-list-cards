import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import Link from "../Link/Link";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About Us", path: "/about" },
    { id: 3, name: "Products", path: "/products" },
    { id: 4, name: "Contact Us", path: "/contact" },
  ];
  return (
    <nav className="bg-purple-100 py-3 px-4">
      <div className="md:hidden" onClick={() => setOpen(!open)}>
        <span>
          {open === true ? (
            <XMarkIcon className="h-6 w-6 text-purple-500" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-purple-500" />
          )}
        </span>
      </div>
      <ul
        className={`md:flex absolute md:static bg-purple-400 mt-3 pl-4 py-1 md:bg-purple-100 duration-500 ${
          open ? "top-6" : "-top-36"
        }`}
      >
        {routes.map((route) => (
          <Link key={route.id} route={route}></Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
