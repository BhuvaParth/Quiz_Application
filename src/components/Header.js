import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-gray-400 text-black p-4 flex items-center justify-center shadow-md">
      <div className="flex items-center">
        <Link to="/" className="text-black text-2xl font-bold">
          Quiz Partner
        </Link>
      </div>
    </nav>
  );
};

export default Header;
