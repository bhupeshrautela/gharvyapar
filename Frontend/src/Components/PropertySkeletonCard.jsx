function PropertySkeletonCard() {
  return (
    <div className="w-screen animate-pulse rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
      
      {/* Image */}
      <div className="h-56 w-full rounded-xl bg-gray-200"></div>

      {/* Title */}
      <div className="mt-4 h-6 w-3/4 rounded bg-gray-200"></div>

      {/* Location */}
      <div className="mt-3 h-4 w-1/2 rounded bg-gray-200"></div>

      {/* Details */}
      
      <div className="mt-5 flex gap-3">
        <div className="h-5 w-16 rounded bg-gray-200"></div>
        <div className="h-5 w-16 rounded bg-gray-200"></div>
        <div className="h-5 w-16 rounded bg-gray-200"></div>
      </div>

      {/* Price */}
      <div className="mt-5 h-7 w-32 rounded bg-gray-200"></div>

      {/* Button */}
      <div className="mt-5 h-11 w-full rounded-xl bg-gray-200"></div>

    </div>
  );
}

export default PropertySkeletonCard;