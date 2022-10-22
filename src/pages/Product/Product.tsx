import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Table from '../../components/table/Table';
import { GET_PRODUCT_LIST } from '../../helper/API';
import useProduct from '../../hooks/useProduct';
import { ProductData } from './AddProduct';
import * as Icon from 'react-bootstrap-icons';
import { toast } from 'react-toastify';

const Product = () => {
    const navigate = useNavigate()
    const { getProductList, deleteProduct } = useProduct()
    const [productData, setProductData] = useState<ProductData[]>([])
    const [pageNumber, setPageNumber] = useState<number>(1)
    const [perPage, setPagePage] = useState<number>(10)
    const [search, setSearch] = useState<string>('')
    const [hsnId, setHsnId] = useState<string>('')
    const [colorId, setColorId] = useState<string>('')
    const columns = [
        // { field: 'id', headerName: 'id', hide: true },
        { field: 'product_name', headerName: 'Name', width: 150, flex: 1, hideable: false },
        { field: 'color', headerName: 'Color', flex: 1 },
        { field: 'price_per_weight_piece', headerName: 'Price per weight piece', flex: 1, hide: true },
        { field: 'production_per_piece_weight', headerName: 'Production per piece weight', flex: 1, hide: true },
        { field: 'product_lip', headerName: 'Product lip', flex: 1, hide: true },
        { field: 'product_ml_actual', headerName: 'Product ml actual', flex: 1, hide: true },
        { field: 'product_final_height_mm', headerName: 'Product final height mm', flex: 1, hide: true },
        { field: 'product_current_height_mm', headerName: 'Product current height mm', flex: 1, hide: true },
        // { field: 'hsn_code', headerName: 'HSN code', flex: 1 },
        // { field: 'gst_per', headerName: 'GST', flex: 1 },
        { field: 'status', headerName: 'Status', flex: 1 },
        {
            field: 'id', headerName: 'Action', flex: 1,
            renderCell: (params: any) => {
                return (
                    <>
                        <button className='btn btn-light' onClick={() => editProduct(params.id)}><Icon.PenFill /></button>
                        <button className='btn btn-danger mx-1' onClick={() => deleteProductById(params.id)}><Icon.Trash2 /></button>
                    </>
                )
            }
        }
    ];

    const editProduct = (id: string) => {
        navigate(`/product/add?id=${id}`)
    }

    const deleteProductById = (id: string) => {
        deleteProduct(id).then((res: any) => {
            if (res.data.success) {
                toast.success(res.data.message)
                navigate('/product')
            } else {
                toast.error(res.data.message)
            }
        }).catch((err: any) => {
            console.log(err);
    
        })
    }

    const getProductListData = () => {
        getProductList(colorId, hsnId, search, perPage, pageNumber).then((res: any) => {
            setProductData(res?.data?.data?.product ?? [])
        }).catch((err: any) => {
            console.log(err);

        })
    }

    useEffect(() => {
        getProductListData()
    }, [])

    return (
        <div className='h-80 mt-5'>
            <div className='d-flex justify-content-between pb-2'>
                <h4>Product Master</h4>
                <button type="button" className="btn btn-primary" onClick={() => navigate("/product/add")}>Add</button>
            </div>
            <Table rows={productData} columns={columns} />
        </div>
    )
}

export default Product