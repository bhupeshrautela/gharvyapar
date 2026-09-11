import React from "react";

function HeroHeading() {
  return (
    <div className="w-full">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[4px] text-yellow-400 sm:text-base">
        Find Your Perfect Place
      </p>

      <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
        Discover a Place
        <br />
        <span className="text-yellow-400">
          You'll Love to Call Home.
        </span>
      </h1>

      <p className="mt-6 max-w-2xl text-base leading-7 text-black sm:text-lg">
        Explore beautiful properties in the locations you love.
        Find the perfect home that matches your lifestyle, needs
        and budget.
      </p>
    </div>
  );
}

export default HeroHeading;