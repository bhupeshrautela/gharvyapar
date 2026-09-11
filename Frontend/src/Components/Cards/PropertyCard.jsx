import { useNavigate } from "react-router-dom";

function PropertyCard({ property }) {
  const navigate = useNavigate();

  return (
    <div
      className="
        w-75
        shrink-0
      
        rounded-2xl
        bg-white
        shadow-md

        transition-all
        duration-300

        hover:-translate-y-1
        hover:shadow-xl

        sm:w-[320px]
      "
    >

      {/* Image */}
      <div className="relative h-52 w-full bg-gray-200 sm:h-56">

        <img
          src={property?.image}
          alt={property?.Name || "Property"}
          className="
            h-full
            w-full
            object-cover
          "
        />

        {/* Price */}
        <div
          className="
            absolute
            bottom-3
            left-3

            rounded-lg
            bg-black/70

            px-3
            py-1.5

            text-sm
            font-semibold
            text-white
          "
        >
          ₹{Number(property?.Price || 0).toLocaleString("en-IN")}
        </div>

      </div>

      {/* Content */}
      <div className="p-5">

        {/* Property Name */}
        <h2
          className="
            truncate
            text-xl
            font-bold
            text-gray-900
          "
        >
          {property?.Name || "Property Name"}
        </h2>

        {/* Property Title */}
        <p
          className="
            mt-1
            line-clamp-2
            text-sm
            text-gray-500
          "
        >
          {property?.["Property Title"] || "Property Title"}
        </p>

        {/* Location */}
        <p className="mt-3 text-sm text-gray-600">
          📍 {property?.Location || "Location"}
        </p>

        {/* Details */}
        <div
          className="
            mt-4
            grid
            grid-cols-2
            gap-4

            border-y
            border-gray-100

            py-4
          "
        >

          {/* Area */}
          <div>
            <p className="text-xs text-gray-400">
              Area
            </p>

            <p className="font-semibold text-gray-800">
              {property?.Total_Area || "-"} sq.ft
            </p>
          </div>

          {/* Price / Sq.ft */}
          <div>
            <p className="text-xs text-gray-400">
              Price / Sq.ft
            </p>

            <p className="font-semibold text-gray-800">
              ₹{property?.Price_per_SQFT || "-"}
            </p>
          </div>

          {/* Baths */}
          <div>
            <p className="text-xs text-gray-400">
              Baths
            </p>

            <p className="font-semibold text-gray-800">
              {property?.Baths || "-"}
            </p>
          </div>

          {/* Balcony */}
          <div>
            <p className="text-xs text-gray-400">
              Balcony
            </p>

            <p className="font-semibold text-gray-800">
              {property?.Balcony || "-"}
            </p>
          </div>

        </div>

        {/* Button */}
        <button
          onClick={() => navigate(`/property/${property?._id}`)}
          className="
            mt-5
            w-full

            rounded-xl
            bg-black

            py-3

            font-semibold
            text-white

            transition

            hover:bg-gray-800
            active:scale-[0.98]
          "
        >
          View Property
        </button>

      </div>
    </div>
  );
}

export default PropertyCard;