import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddColor from './ColorMaster/AddColor'
import { ColorMaster } from './ColorMaster/ColorMaster'
import AddGST from './GSTManager/AddGST'
import GSTManager from './GSTManager/GSTManager'
import AddHSN from './HSN/AddHSN'
import { HSN } from './HSN/HSN'
import AddProduct from './Product/AddProduct'
import Product from './Product/Product'

const Pages = () => {
    return (
        <Routes>
            <Route path='/color-master' element={<ColorMaster />} />
            <Route path='/color-master/add-color' element={<AddColor />} />
            <Route path='/color-master/edit-color/:id' element={<AddColor />} />
            <Route path='/hsn' element={<HSN />} />
            <Route path='/gst' element={<GSTManager />} />
            <Route path='/gst/add' element={<AddGST />} />
            <Route path='/product' element={<Product />} />
            <Route path='/product/add' element={<AddProduct />} />
            <Route path='/hsn/add' element={<AddHSN />} />
        </Routes>
    )
}

export default Pages