import React from "react";

function Button({ ButtonName ,...props}) {
 
  return (
    <button
      className="
        inline-flex
        items-center
        justify-center
        rounded-xl
        bg-yellow-400
        px-6
        py-3
        text-base
        font-bold
        capitalize
        text-black
        shadow-lg
        transition-all
        duration-300
        hover:-translate-y-1
        hover:bg-yellow-300
        hover:shadow-xl
        active:translate-y-0
        active:scale-95
      "
      {...props}
    >
      {ButtonName || "Button"}
    </button>
  );
}

export default Button;