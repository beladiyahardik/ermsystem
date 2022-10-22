import React from 'react'
import Table from '../../components/table/Table';

const Product = () => {
    const columns = [
        // { field: 'id', headerName: 'ID' },
        { field: 'product_name', headerName: 'Name', width: 150 },
        { field: 'color', headerName: 'Color' },
        { field: 'price_per_weight_piece', headerName: 'Price per weight piece' },
        { field: 'production_per_piece_weight', headerName: 'Production per piece weight' },
        { field: 'product_lip', headerName: 'Product lip' },
        { field: 'product_ml_actual', headerName: 'Product ml actual' },
        { field: 'product_final_height_mm', headerName: 'Product final height mm' },
        { field: 'product_current_height_mm', headerName: 'Product current height mm' },
        { field: 'hsn_code', headerName: 'HSN code' },
        { field: 'gst_per', headerName: 'GST' },
        { field: 'status', headerName: 'Status' },
    ];

    const rows = [
        { id: 1, product_name: 'Test product', color: 'Red' },
        { id: 2, product_name: 'Test product', color: 'Yellow' },
        { id: 3, product_name: 'Test product', color: 'Pink' },
        { id: 4, product_name: 'Test product', color: 'Brown' },
    ];

    return (
        <div className='h-50 mt-5'>
            <h4>Color Master</h4>
            <Table rows={rows} columns={columns} />
        </div>
    )
}

export default Product