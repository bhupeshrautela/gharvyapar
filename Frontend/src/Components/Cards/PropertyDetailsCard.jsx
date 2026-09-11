import React from "react";

function PropertyDetailsCard({ property }) {
  return (
    <div className="w-full overflow-hidden rounded-2xl bg-white shadow-xl shrink-0 snap-start snap-center scroll-m-4">

      {/* Property Image */}
      <div className="relative h-112.5 w-full bg-gray-200">
        <img
          src={property.image}
          alt={property.Name|"Property"}
          className="h-full w-full object-cover"
        />

        {/* Price */}
        <div className="absolute bottom-5 left-5 rounded-xl bg-black/75 px-5 py-3 text-xl font-bold text-white">
          ₹{Number(property?.Price).toLocaleString("en-IN")}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-10">

        {/* Name + Location */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 md:text-4xl">
            {property?.Name ?? "Property Name"}
          </h1>

          <p className="mt-3 text-lg text-gray-500">
            {property?.["Property Title"] ?? "Property Title"}
          </p>

          <p className="mt-4 text-gray-600">
            📍 {property?.Location ?? "Location"}
          </p>
        </div>


        {/* Property Features */}
        <div className="mt-8 grid grid-cols-2 gap-4 border-y border-gray-200 py-6 md:grid-cols-4">

          <div>
            <p className="text-sm text-gray-400">
              Area
            </p>
            <p className="mt-1 text-lg font-semibold text-gray-800">
              {property?.Total_Area ?? "-"} sq.ft
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-400">
              Price / Sq.ft
            </p>
            <p className="mt-1 text-lg font-semibold text-gray-800">
              ₹{property?.Price_per_SQFT ?? "-"}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-400">
              Baths
            </p>
            <p className="mt-1 text-lg font-semibold text-gray-800">
              {property?.Baths ?? "-"}
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-400">
              Balcony
            </p>
            <p className="mt-1 text-lg font-semibold text-gray-800">
              {property?.Balcony ?? "-"}
            </p>
          </div>

        </div>


        {/* Description */}
        <div className="mt-8">

          <h2 className="text-2xl font-bold text-gray-900">
            About this Property
          </h2>

          <p className="mt-4 text-base leading-7 text-gray-600">
            {property?.Description ?? "No description available."}
          </p>

        </div>


        {/* More Details */}
        <div className="mt-8">

          <h2 className="text-2xl font-bold text-gray-900">
            Property Details
          </h2>

          <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">

            <div className="rounded-xl bg-gray-50 p-4">
              <p className="text-sm text-gray-400">
                Property Name
              </p>
              <p className="mt-1 font-semibold text-gray-800">
                {property?.Name ?? "-"}
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-4">
              <p className="text-sm text-gray-400">
                Location
              </p>
              <p className="mt-1 font-semibold text-gray-800">
                {property?.Location ?? "-"}
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-4">
              <p className="text-sm text-gray-400">
                Total Area
              </p>
              <p className="mt-1 font-semibold text-gray-800">
                {property?.Total_Area ?? "-"} sq.ft
              </p>
            </div>

            <div className="rounded-xl bg-gray-50 p-4">
              <p className="text-sm text-gray-400">
                Price
              </p>
              <p className="mt-1 font-semibold text-gray-800">
                ₹{Number(property?.Price).toLocaleString("en-IN")}
              </p>
            </div>

          </div>

        </div>


        {/* Enquiry Button */}
        <button className="mt-10 w-full rounded-xl bg-black py-4 text-lg font-semibold text-white transition hover:bg-gray-800">
          Contact / Enquire
        </button>

      </div>
    </div>
  );
}

export default PropertyDetailsCard;