import React from "react";

function InputField({ className = "", ...props }) {
  return (
    <input
      type="text"
      {...props}
      className={`
        w-full
        sm:w-64
        md:w-72

        px-3
        py-2

        text-sm
        text-gray-800

        bg-white
        border
        border-gray-300
        rounded-md

        shadow-sm

        placeholder:text-gray-400

        outline-none

        transition-all
        duration-200

        focus:border-black
        focus:ring-1
        focus:ring-black

        ${className}
      `}
    />
  );
}

export default InputField;