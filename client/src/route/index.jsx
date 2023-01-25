import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddProduct from '../pages/add-product'
import Home from '../pages/home'

const Roting = () => {
  return (
    <div>

        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/home-pages' element={<AddProduct/>}/>
        </Routes>
    </div>
  )
}

export default Roting