import React from "react";

function About() {
  return (
    <div className="w-full bg-white text-gray-900">

      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-black">
        <img
          src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2000&q=80"
          alt="Luxury Property"
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 md:px-12">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[4px] text-yellow-400">
            About Us
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Helping You Find a Place
            <span className="text-yellow-400"> You'll Love.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-200 sm:text-lg">
            We make property discovery simple, transparent and stress-free.
            Explore beautiful properties, compare your options and find a
            place that truly feels like home.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 py-20 sm:px-8 md:px-12 lg:grid-cols-2 lg:items-center">

        <div>
          <p className="text-sm font-bold uppercase tracking-[3px] text-yellow-500">
            Who We Are
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            More Than Just
            <span className="text-yellow-500"> Property Listings.</span>
          </h2>

          <p className="mt-6 leading-7 text-gray-600">
            Finding the right property should not feel complicated. Our
            platform brings property information together in one convenient
            place, helping buyers and renters discover properties that match
            their needs.
          </p>

          <p className="mt-4 leading-7 text-gray-600">
            From location and property type to area and pricing, we aim to
            give you the information you need to make better decisions.
          </p>

          <button className="mt-8 rounded-lg bg-black px-6 py-3 font-semibold text-white transition hover:bg-gray-800">
            Explore Properties
          </button>
        </div>

        {/* Image */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
            alt="Modern Interior"
            className="h-[400px] w-full rounded-2xl object-cover shadow-2xl sm:h-[500px]"
          />

          <div className="absolute -bottom-6 -left-4 rounded-xl bg-white p-5 shadow-xl sm:-left-6">
            <p className="text-3xl font-bold">10K+</p>
            <p className="text-sm text-gray-500">
              Properties Discovered
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-100 px-5 py-16 sm:px-8 md:px-12">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 md:grid-cols-4">

          <div className="text-center">
            <h3 className="text-3xl font-bold sm:text-4xl">10K+</h3>
            <p className="mt-2 text-sm text-gray-500">Properties</p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold sm:text-4xl">50+</h3>
            <p className="mt-2 text-sm text-gray-500">Locations</p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold sm:text-4xl">5K+</h3>
            <p className="mt-2 text-sm text-gray-500">Happy Users</p>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold sm:text-4xl">24/7</h3>
            <p className="mt-2 text-sm text-gray-500">Accessibility</p>
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:px-12">

        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[3px] text-yellow-500">
            Why Choose Us
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Everything You Need to Find
            <span className="text-yellow-500"> Your Next Place.</span>
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">

          <div className="rounded-2xl border border-gray-200 p-7 transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-black text-2xl text-white">
              🔍
            </div>

            <h3 className="text-xl font-bold">
              Easy Property Search
            </h3>

            <p className="mt-3 leading-6 text-gray-500">
              Search and discover properties based on location, price,
              property type and other important details.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-7 transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-black text-2xl text-white">
              🏠
            </div>

            <h3 className="text-xl font-bold">
              Detailed Information
            </h3>

            <p className="mt-3 leading-6 text-gray-500">
              Get important property details in one place so you can compare
              different options with confidence.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 p-7 transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-black text-2xl text-white">
              ⚡
            </div>

            <h3 className="text-xl font-bold">
              Simple Experience
            </h3>

            <p className="mt-3 leading-6 text-gray-500">
              A clean and modern experience designed to help you find the
              right property without unnecessary complexity.
            </p>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-black px-5 py-20 text-center sm:px-8">

        <p className="text-sm font-semibold uppercase tracking-[3px] text-yellow-400">
          Your Next Home Is Waiting
        </p>

        <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold text-white sm:text-4xl md:text-5xl">
          Ready to Discover Your Perfect Property?
        </h2>

        <p className="mx-auto mt-5 max-w-xl leading-7 text-gray-400">
          Explore our property collection and find a place that matches
          your lifestyle, budget and dreams.
        </p>

        <button className="mt-8 rounded-lg bg-yellow-400 px-7 py-3 font-bold text-black transition hover:bg-yellow-300">
          Browse Properties
        </button>

      </section>

    </div>
  );
}

export default About;