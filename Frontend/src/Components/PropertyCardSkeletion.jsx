function PropertySkeletonCard() {
  return (
    <div
      className="
        w-75
        shrink-0
        rounded-2xl
        bg-white
        shadow-md
        animate-pulse
        sm:w-[320px]
      "
    >
      <div className="relative h-52 w-full rounded-t-2xl bg-gray-200 sm:h-56">
        <div className="absolute bottom-3 left-3 h-7 w-28 rounded-lg bg-gray-300"></div>
      </div>

      <div className="p-5">
        <div className="h-6 w-3/4 rounded bg-gray-200"></div>

        <div className="mt-2 h-10 w-full rounded bg-gray-200"></div>

        <div className="mt-3 h-5 w-2/3 rounded bg-gray-200"></div>

        <div className="mt-4 grid grid-cols-2 gap-4 border-y border-gray-100 py-4">
          <div>
            <div className="h-3 w-12 rounded bg-gray-200"></div>
            <div className="mt-2 h-5 w-20 rounded bg-gray-200"></div>
          </div>

          <div>
            <div className="h-3 w-20 rounded bg-gray-200"></div>
            <div className="mt-2 h-5 w-20 rounded bg-gray-200"></div>
          </div>

          <div>
            <div className="h-3 w-12 rounded bg-gray-200"></div>
            <div className="mt-2 h-5 w-10 rounded bg-gray-200"></div>
          </div>

          <div>
            <div className="h-3 w-16 rounded bg-gray-200"></div>
            <div className="mt-2 h-5 w-10 rounded bg-gray-200"></div>
          </div>
        </div>

        <div className="mt-5 h-12 w-full rounded-xl bg-gray-200"></div>
      </div>
    </div>
  );
}

export default PropertySkeletonCard;