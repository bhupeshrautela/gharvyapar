import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import MainLayout from './Layouts/MainLayout'
import Property from './Pages/Property'
import PropertyDetails from './Pages/PropertyDetails'

function AllLinkRoute() {
  return (
    <Routes>
        <Route element={<MainLayout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/property' element={<Property/>}>
        <Route path=':propertyId' element={<PropertyDetails/>}/>
        </Route>
        
        </Route>
        

    </Routes>
  )
}

export default AllLinkRoute