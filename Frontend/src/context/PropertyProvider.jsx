import React, { useEffect, useState } from 'react'
import  PropertyContext  from './PropertyContext'
import getProperty from '../service/propertyApi'

function PropertyProvider({children}) {
const[property,setProperty] = useState([])
  useEffect(  ()=>{

    async function fetchProperty() {
      
    
    let data=await getProperty()
    setProperty(data)
    }
    fetchProperty()


  },[])


  
  return (

    <PropertyContext.Provider value={property}>
        {children}
    </PropertyContext.Provider>
    
  )
}

export default PropertyProvider