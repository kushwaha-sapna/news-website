import React from "react";
import { Link } from "react-router-dom";

const MobileMenu = ({
  setIsOpen,
}) => {
  return (
    <div className="md:hidden bg-white border-t">

      <div className="flex flex-col p-4 gap-4">

        <Link
          to="/"
          onClick={() =>
            setIsOpen(false)
          }
        >
          Home
        </Link>

        <Link
          to="/category/sports"
          onClick={() =>
            setIsOpen(false)
          }
        >
          Sports
        </Link>

        <Link
          to="/category/technology"
          onClick={() =>
            setIsOpen(false)
          }
        >
          Technology
        </Link>

        <Link
          to="/category/business"
          onClick={() =>
            setIsOpen(false)
          }
        >
          Business
        </Link>

        <Link
          to="/category/politics"
          onClick={() =>
            setIsOpen(false)
          }
        >
          Politics
        </Link>

        <Link
          to="/category/entertainment"
          onClick={() =>
            setIsOpen(false)
          }
        >
          Entertainment
        </Link>

      </div>
    </div>
  );
};

export default MobileMenu;