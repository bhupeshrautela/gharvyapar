import React, { useEffect, useState, useTransition } from "react";
import { Outlet } from "react-router-dom";
import PropertyDetails from "./PropertyDetails";
import PropertyDetailsCard from "../Components/Cards/PropertyDetailsCard";

function Property() {
  const [city,setCity]=useState("")
  const [price,setPrice]=useState("")
  const [bhk,setBhk]=useState("")
  const [selectedData,setSelectedDAta]=useState([])
  
 async function propertyHandle(){
  let response=await fetch(`https://gharvyapar.onrender.com/property/selectedproperty?city=${city}&price=${price}&bhk=${bhk}`)
  let data=await response.json()
  setSelectedDAta(data)
  

 }
 console.log(selectedData)

  return (

    <>
      {/* Property Header + Filters */}
      <section className="w-full bg-gray-100 px-5 py-8 sm:px-8 md:px-12">
        
        <div className="mx-auto max-w-7xl">
          <h1 className="text-3xl font-bold text-gray-900">
            Properties
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Find the perfect property for you
          </p>

          {/* Filters */}
          <div className="mt-6 grid grid-cols-1 gap-4 rounded-xl bg-white p-5 shadow-md sm:grid-cols-2 lg:grid-cols-4">
            
            {/* City */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Search by City
              </label>

              <input

                type="text"
                placeholder="Enter city..."
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-black"
                onChange={(e)=>{setCity(e.target.value) }}
                value={city}
              />
            </div>

            {/* Property Type */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Select BHK
              </label>

              <select className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-black" value={bhk} 
              onChange={(e)=> setBhk(e.target.value)}
              >
                <option value="1">1 BHK</option>
                <option value="2">2 BHK</option>
                <option value="3">3 BHK</option>
                <option value="4">4 BHK</option>
                <option value="5">5 BHK</option>
              </select>
            </div>

            {/* Price */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Max Price
              </label>

              <select className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-black" 
              value={price}
              onChange={(e)=>{setPrice(e.target.value)}}
              >
                <option value="">Any Price</option>
                <option value="5000000">₹50 Lakh</option>
                <option value="10000000">₹1 Crore</option>
                <option value="20000000">₹2 Crore</option>
                <option value="50000000">₹5 Crore</option>
              </select>
            </div>

            {/* Button */}
            <div className="flex items-end">
              <button
                className="
                  w-full
                  rounded-lg
                  bg-black
                  px-4
                  py-2
                  font-semibold
                  text-white
                  transition
                  hover:bg-gray-800
                  active:scale-[0.98]
                "
                onClick={propertyHandle}
              >
                Search Property
              </button>
            </div>

          </div>
        </div>
      </section>

      <section className="flex  snap-ma gap-10 ">
        <div className="flex overflow-x-auto snap-start snap-mandatory scroll-smooth scrollbar-thumb-amber-200 scroll-m-5 snap-x">
       {selectedData.map((property)=>{
        return <PropertyDetailsCard property={property}/>
       })}
       </div>
      </section>

      {/* Child Routes */}
      <Outlet />
    </>
  );
}

export default Property;