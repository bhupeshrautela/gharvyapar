import { useParams } from "react-router-dom"

import { useContext } from "react"
import PropertyContext from "../context/PropertyContext"
import PropertyDetailsCard from "../Components/Cards/PropertyDetailsCard"


function PropertyDetails() {
    const {property:propertydata,loading}=useContext(PropertyContext)
    console.log(propertydata)
    let {propertyId}=useParams()
    let property=propertydata.filter((property)=>{
        return propertyId===property._id
    })
console.log(property)

return(
    <>
    {property.map((p)=>{
        return <PropertyDetailsCard property={p} key={p._id}/>
    })}
  
    </>
)
    


}

export default PropertyDetails