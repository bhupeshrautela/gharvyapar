import React, { useContext, useMemo } from 'react'
import PropertyContext from '../context/PropertyContext'
import Hero from '../Components/Hero'
import PropertyCard from '../Components/Cards/PropertyCard'

import PropertySkeletonCard from '../Components/PropertySkeletonCard'
function Home() {
  const {property,loading}=useContext(PropertyContext)
    const propertyData=property
    console.log(property)
  

   const delhiProperty=useMemo(()=>{
   return propertyData.filter((property)=>property.Location.includes("Delhi"))
  
   },[propertyData])
  const bhk3Property=useMemo(()=>{
    return propertyData.filter((property)=>property.Baths==3)
  },[propertyData])
  const under1Cr=useMemo(()=>{
    return propertyData.filter((property)=>property.Price<10000000)
  },[propertyData])
 

   
    
 

  return (
    
    <section className="w-full flex flex-col gap-10">
      <section>
        <Hero/>
      </section>

      <section className='flex flex-col gap-10 m-3'>
        <div>
          <p className='font-semibold text-3xl capitalize ml-4'>trending property</p>
        </div>
        <div className='flex overflow-x-scroll gap-4'>
          {loading? (
             <PropertySkeletonCard/>
          ) :(
            propertyData.map((property)=>{
              return <PropertyCard property={property}/>
            })
          )}
        </div>
      </section>


          <section className='flex flex-col gap-10 m-3'>
        <div>
          <p className='font-semibold text-3xl capitalize ml-4'>your city delhi</p>
        </div>
        <div className='flex overflow-x-scroll gap-4'>
           {loading? (
              <PropertySkeletonCard/>
          ) :(
            delhiProperty.map((property)=>{
              return <PropertyCard property={property}/>
            })
          )}
        </div>
      </section>

             <section className='flex flex-col gap-10 m-3'>
        <div>
          <p className='font-semibold text-3xl capitalize ml-4'>3 bhk house</p>
        </div>
        <div className='flex overflow-x-scroll gap-4'>
          {loading? (
              <PropertySkeletonCard/>
          ) :(
            bhk3Property.map((property)=>{
              return <PropertyCard property={property}/>
            })
          )}
        </div>
      </section>

             <section className='flex flex-col gap-10 m-3'>
        <div>
          <p className='font-semibold text-3xl capitalize ml-4'>under 1 crore</p>
        </div>
        <div className='flex overflow-x-scroll gap-4'>
          {loading? (
              <PropertySkeletonCard/>
          ) :(
            under1Cr.map((property)=>{
              return <PropertyCard property={property}/>
            })
          )}
        </div>
      </section>
      

      </section>

      
      
    )

  
}

export default Home