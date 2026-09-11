import React from "react";
import SearchBar from "./SearchBar";

function NavbarBox({ children }) {
  return (
    <nav
      className="
        w-full
        min-h-16
        px-4
        py-3
        bg-white
        shadow-md

        flex
        flex-col
        gap-4

        sm:flex-row
        sm:items-center
        sm:justify-between
      "
    >
      {/* Navigation Links */}
      <div
        className="
          flex
          flex-wrap
          justify-center
          items-center
          gap-2

          sm:justify-start
        "
      >
        {children}
      </div>

      {/* Search */}
      <SearchBar />
    </nav>
  );
}

export default NavbarBox;