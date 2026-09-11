import React from "react";
import InputField from "./InputField";

function SearchBar() {
  return (
    <div className="w-full sm:w-auto">
      <InputField
        type="search"
        placeholder="Search property..."
      />
    </div>
  );
}

export default SearchBar;