import { log } from 'console'
import React, { useState, useEffect } from 'react'
import { Card, Col, Form, InputGroup, Row } from 'react-bootstrap'
import { Navigate, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import useColor from '../../hooks/useColor'
import useProduct from '../../hooks/useProduct'

export interface ProductData {
    id?: string,
    product_name: string,
    color_id: string,
    price_per_piece_weight: number,
    production_per_piece_weight: number,
    product_lip: string,
    product_ml_actual: string,
    product_final_height_mm: number,
    product_current_height_mm: number,
    hsn_id: string,
    GST_percentage: string,
    status: string,
}

export interface DropDown {
    id: string,
    name: string
}
export interface HSNDropDown {
    id: string,
    hsn_code: string
}

const AddProduct = () => {
    const navigate = useNavigate()
    const queryParams = new URLSearchParams(window.location.search);
    const id: string | null = queryParams.get("id");
    const { createProduct, getHSNDropdown, getProductById, editProduct } = useProduct();
    const { getColorDropdown } = useColor();
    const [colordata, setColorData] = useState<DropDown[]>()
    const [hsndata, setHSNData] = useState<HSNDropDown[]>()
    const [productData, setProductData] = useState<ProductData>({
        product_name: "",
        color_id: "",
        price_per_piece_weight: 0,
        production_per_piece_weight: 0,
        product_lip: "",
        product_ml_actual: "",
        product_final_height_mm: 0,
        product_current_height_mm: 0,
        hsn_id: "",
        GST_percentage: "",
        status: "",
    })
    const [productDataErr, setProductDataErr] = useState<any>({
        product_name: "",
        color_id: "",
        price_per_piece_weight: "",
        production_per_piece_weight: "",
        product_lip: "",
        product_ml_actual: "",
        product_final_height_mm: "",
        product_current_height_mm: "",
        hsn_id: "",
        GST_percentage: "",
        status: "",
    })

    const getColorDropDownData = () => {
        getColorDropdown().then((res: any) => {
            setColorData(res?.data?.data?.color ?? [])
        }).catch((err: any) => {
            console.log(err);

        })
    }

    const getHSNDropDownData = () => {
        getHSNDropdown().then((res: any) => {
            setHSNData(res?.data?.data?.hsnCode ?? [])
        }).catch((err: any) => {
            console.log(err);

        })
    }

    const onHandleChange = (e: any) => {
        setProductData({ ...productData, [e.target.name]: e.target.value })
        setProductDataErr({ ...productDataErr, [e.target.name]: "" })
    }

    const validation = () => {
        let flag = false
        let err = {
            product_name: "",
            color_id: "",
            price_per_piece_weight: "",
            production_per_piece_weight: "",
            product_lip: "",
            product_ml_actual: "",
            product_final_height_mm: "",
            product_current_height_mm: "",
            hsn_id: "",
            GST_percentage: "",
            status: "",
        }

        if (!productData.product_name) {
            flag = true
            err.product_name = "This field is required"
        }
        if (!productData.color_id) {
            flag = true
            err.color_id = "This field is required"
        }
        if (!productData.price_per_piece_weight || productData.price_per_piece_weight === 0) {
            flag = true
            err.price_per_piece_weight = "This field is required"
        }
        if (!productData.production_per_piece_weight || productData.production_per_piece_weight === 0) {
            flag = true
            err.production_per_piece_weight = "This field is required"
        }
        if (!productData.product_lip) {
            flag = true
            err.product_lip = "This field is required"
        }
        if (!productData.product_ml_actual) {
            flag = true
            err.product_ml_actual = "This field is required"
        }
        if (!productData.product_final_height_mm || productData.product_final_height_mm === 0) {
            flag = true
            err.product_final_height_mm = "This field is required"
        }
        if (!productData.product_current_height_mm || productData.product_current_height_mm === 0) {
            flag = true
            err.product_current_height_mm = "This field is required"
        }
        if (!productData.hsn_id) {
            flag = true
            err.hsn_id = "This field is required"
        }
        if (!productData.GST_percentage) {
            flag = true
            err.GST_percentage = "This field is required"
        }
        if (!productData.status) {
            flag = true
            err.status = "This field is required"
        }

        setProductDataErr(err)

        return flag
    }

    const saveProduct = () => {
        if (validation()) {
            return
        }

        if (id) {
            editProduct(id, productData).then((res: any) => {
                if (res.data.success) {
                    toast.success(res.data.message)
                    navigate('/product')
                } else {
                    toast.error(res.data.message)
                }
            }).catch((err: any) => {
                console.log('err', err);
            })
        } else {
            createProduct(productData).then((res: any) => {
                if (res.data.success) {
                    toast.success(res.data.message)
                    navigate('/product')
                } else {
                    toast.error(res.data.message)
                }
            }).catch((err: any) => {
                console.log('err', err);
            })
        }
    }

    const getProductByPId = () => {
        getProductById(id).then((res: any) => {
            const data = res?.data?.data
            setProductData({
                product_name: data.product_name,
                color_id: data.color_id,
                price_per_piece_weight: data.price_per_piece_weight,
                production_per_piece_weight: data.production_per_piece_weight,
                product_lip: data.product_lip,
                product_ml_actual: data.product_ml_actual,
                product_final_height_mm: data.product_final_height_mm,
                product_current_height_mm: data.product_current_height_mm,
                hsn_id: data.hsnCodeProd,
                GST_percentage: data.GST_percentage,
                status: data.status,
            })
        }).catch((err: any) => {
            console.log(err)
        })
    }

    useEffect(() => {
        getColorDropDownData()
        getHSNDropDownData()
        if (id) {
            getProductByPId()
        }
    }, [id])


    return (
        <div className='h-100 mt-5'>
            <div className='d-flex justify-content-between pb-2'>
                <h4>{id ? "Edit" : "Add"} Product</h4>
            </div>

            <Card
                border="light"
                className="table-wrapper table-responsive shadow-lg mb-4"
            >
                <Card.Body className="pt-0">
                    <Row className="">
                        <Col lg={4} md={6} sm={12} xs={12}>
                            <Form.Group id="name" className="mb-4">
                                <Form.Label>Product name</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        required
                                        name="product_name"
                                        value={productData.product_name}
                                        type="text"
                                        // ref={name}
                                        placeholder="Enter Product Name"
                                        onChange={(e: any) => {
                                            onHandleChange(e)
                                        }}
                                    />
                                </InputGroup>
                                <span className="signup-alert-validation">
                                    {productDataErr.product_name &&
                                        <p>{productDataErr.product_name}</p>
                                    }
                                </span>
                            </Form.Group>
                        </Col>
                        <Col lg={4} md={6} sm={12} xs={12}>
                            <Form.Group id="color_id" className="mb-4">
                                <Form.Label>Color</Form.Label>
                                <Form.Select
                                    name="color_id"
                                    value={productData.color_id}
                                    onChange={(e: any) => {
                                        onHandleChange(e)
                                    }}
                                >
                                    <option value="">Select</option>
                                    {colordata && colordata?.map((data: DropDown) => (
                                        <option value={data?.id}>{data?.name}</option>
                                    ))}
                                </Form.Select>
                                <span className="signup-alert-validation">
                                    {productDataErr.color_id &&
                                        <p>{productDataErr.color_id}</p>
                                    }
                                </span>
                            </Form.Group>
                        </Col>
                        <Col lg={4} md={6} sm={12} xs={12}>
                            <Form.Group id="price_per_piece_weight" className="mb-4">
                                <Form.Label>Price per piece weight</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        required
                                        name="price_per_piece_weight"
                                        value={productData.price_per_piece_weight}
                                        type="number"
                                        // ref={name}
                                        placeholder="Enter price per piece weight"
                                        onChange={(e: any) => {
                                            onHandleChange(e)
                                        }}
                                    />
                                </InputGroup>
                                <span className="signup-alert-validation">
                                    {productDataErr.price_per_piece_weight &&
                                        <p>{productDataErr.price_per_piece_weight}</p>
                                    }
                                </span>
                            </Form.Group>
                        </Col>
                        <Col lg={4} md={6} sm={12} xs={12}>
                            <Form.Group id="production_per_piece_weight" className="mb-4">
                                <Form.Label>Production per piece weight</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        required
                                        name="production_per_piece_weight"
                                        value={productData.production_per_piece_weight}
                                        type="number"
                                        // ref={name}
                                        placeholder="Enter production per piece weight"
                                        onChange={(e: any) => {
                                            onHandleChange(e)
                                        }}
                                    />
                                </InputGroup>
                                <span className="signup-alert-validation">
                                    {productDataErr.production_per_piece_weight &&
                                        <p>{productDataErr.production_per_piece_weight}</p>
                                    }
                                </span>
                            </Form.Group>
                        </Col>
                        <Col lg={4} md={6} sm={12} xs={12}>
                            <Form.Group id="product_lip" className="mb-4">
                                <Form.Label>Product lip</Form.Label>
                                <Form.Select
                                    name="product_lip"
                                    value={productData.product_lip}
                                    onChange={(e: any) => {
                                        onHandleChange(e)
                                    }}
                                >
                                    <option value="">Select</option>
                                    <option value="FlatLip">Flat lip</option>
                                    <option value="BendLip">Bend lip</option>

                                </Form.Select>
                                <span className="signup-alert-validation">
                                    {productDataErr.product_lip &&
                                        <p>{productDataErr.product_lip}</p>
                                    }
                                </span>
                            </Form.Group>
                        </Col>
                        <Col lg={4} md={6} sm={12} xs={12}>
                            <Form.Group id="product_ml_actual" className="mb-4">
                                <Form.Label>Product ml actual</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        required
                                        name="product_ml_actual"
                                        value={productData.product_ml_actual}
                                        type="number"
                                        // ref={name}
                                        placeholder="Enter product ml actual"
                                        onChange={(e: any) => {
                                            onHandleChange(e)
                                        }}
                                    />
                                </InputGroup>
                                <span className="signup-alert-validation">
                                    {productDataErr.product_ml_actual &&
                                        <p>{productDataErr.product_ml_actual}</p>
                                    }
                                </span>
                            </Form.Group>
                        </Col>
                        <Col lg={4} md={6} sm={12} xs={12}>
                            <Form.Group id="product_final_height_mm" className="mb-4">
                                <Form.Label>Product final height mm</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        required
                                        name="product_final_height_mm"
                                        value={productData.product_final_height_mm}
                                        type="number"
                                        // ref={name}
                                        placeholder="Enter product final height mm"
                                        onChange={(e: any) => {
                                            onHandleChange(e)
                                        }}
                                    />
                                </InputGroup>
                                <span className="signup-alert-validation">
                                    {productDataErr.product_final_height_mm &&
                                        <p>{productDataErr.product_final_height_mm}</p>
                                    }
                                </span>
                            </Form.Group>
                        </Col>
                        <Col lg={4} md={6} sm={12} xs={12}>
                            <Form.Group id="product_current_height_mm" className="mb-4">
                                <Form.Label>Product current height mm</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        required
                                        name="product_current_height_mm"
                                        value={productData.product_current_height_mm}
                                        type="number"
                                        // ref={name}
                                        placeholder="Enter product current height mm"
                                        onChange={(e: any) => {
                                            onHandleChange(e)
                                        }}
                                    />
                                </InputGroup>
                                <span className="signup-alert-validation">
                                    {productDataErr.product_current_height_mm &&
                                        <p>{productDataErr.product_current_height_mm}</p>
                                    }
                                </span>
                            </Form.Group>
                        </Col>
                        <Col lg={4} md={6} sm={12} xs={12}>
                            <Form.Group id="hsn_id" className="mb-4">
                                <Form.Label>HSN code</Form.Label>
                                <Form.Select
                                    name="hsn_id"
                                    value={productData.hsn_id}
                                    onChange={(e: any) => {
                                        onHandleChange(e)
                                    }}
                                >
                                    <option value="">Select</option>
                                    {hsndata?.length && hsndata.map((item: HSNDropDown) => (
                                        <option value={item.id}>{item.hsn_code}</option>
                                    ))}
                                </Form.Select>
                                <span className="signup-alert-validation">
                                    {productDataErr.hsn_id &&
                                        <p>{productDataErr.hsn_id}</p>
                                    }
                                </span>
                            </Form.Group>
                        </Col>
                        <Col lg={4} md={6} sm={12} xs={12}>
                            <Form.Group id="GST_percentage" className="mb-4">
                                <Form.Label>GST percentage</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        required
                                        name="GST_percentage"
                                        value={productData.GST_percentage}
                                        type="number"
                                        // ref={name}
                                        placeholder="Enter GST percentage"
                                        onChange={(e: any) => {
                                            onHandleChange(e)
                                        }}
                                    />
                                </InputGroup>
                                <span className="signup-alert-validation">
                                    {productDataErr.GST_percentage &&
                                        <p>{productDataErr.GST_percentage}</p>
                                    }
                                </span>
                            </Form.Group>
                        </Col>
                        <Col lg={4} md={6} sm={12} xs={12}>
                            <Form.Group id="status" className="mb-4">
                                <Form.Label>Status</Form.Label>
                                <Form.Select
                                    name="status"
                                    value={productData.status}
                                    onChange={(e: any) => {
                                        onHandleChange(e)
                                    }}
                                >
                                    <option value="">Select</option>
                                    <option value="true">Active</option>
                                    <option value="false">Inactive</option>

                                </Form.Select>
                                <span className="signup-alert-validation">
                                    {productDataErr.status &&
                                        <p>{productDataErr.status}</p>
                                    }
                                </span>
                            </Form.Group>
                        </Col>

                    </Row>
                    <button
                        type="button"
                        className="btn btn-primary mr-2"
                        onClick={saveProduct}
                    >
                        {id ? "Edit" : "Add"}
                    </button>
                    <button
                        type="button"
                        className="btn btn btn-outline-dark ms-2"
                        onClick={() => navigate('/product')}
                    >
                        Cancel
                    </button>
                </Card.Body>

            </Card>
        </div>
    )
}

export default AddProduct