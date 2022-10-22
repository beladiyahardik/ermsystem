import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ColorMaster } from './ColorMaster/ColorMaster'
import GSTManager from './GSTManager/GSTManager'
import { HSN } from './HSN/HSN'
import AddProduct from './Product/AddProduct'
import Product from './Product/Product'

const Pages = () => {
    return (
        <Routes>
            <Route path='/color-master' element={<ColorMaster />} />
            <Route path='/hsn' element={<HSN />} />
            <Route path='/gst' element={<GSTManager />} />
            <Route path='/product' element={<Product />} />
            <Route path='/product/add' element={<AddProduct />} />
        </Routes>
    )
}

export default Pages