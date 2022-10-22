import React, { useState, useEffect } from 'react'
import { Card, Col, Form, InputGroup, Row } from 'react-bootstrap'

interface ProductData {
    product_name: string,
    color: string,
    price_per_piece_weight: number,
    production_per_piece_weight: number,
    product_lip: string,
    product_ml_actual: string,
    product_final_height_mm: number,
    product_current_height_mm: number,
    HSN_code: string,
    GST_percentage: string,
    status: string,
}

const AddProduct = () => {

    const [productData, setProductData] = useState<ProductData>({
        product_name: "",
        color: "",
        price_per_piece_weight: 0,
        production_per_piece_weight: 0,
        product_lip: "",
        product_ml_actual: "",
        product_final_height_mm: 0,
        product_current_height_mm: 0,
        HSN_code: "",
        GST_percentage: "",
        status: "",
    })

    const onHandleChange = (e: any) => {
        setProductData({ ...productData, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        console.log("productData ==================>", productData)
    }, [productData])


    return (
        <div className='h-100 mt-5'>
            <div className='d-flex justify-content-between pb-2'>
                <h4>Add Color</h4>
            </div>

            <Card
                border="light"
                className="table-wrapper table-responsive shadow-sm mb-4 p-4"
            >
                <Card.Body className="pt-0">
                    <Row className="align-items-end">
                        <Col xs={4}>
                            <Form.Group id="name" className="mb-4">
                                <Form.Label>Product name</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        required
                                        name="product_name"
                                        value={productData.product_name}
                                        type="text"
                                        autoFocus={true}
                                        // ref={name}
                                        placeholder="Enter Product Name"
                                        onChange={(e: any) => {
                                            onHandleChange(e)
                                        }}
                                    />
                                </InputGroup>
                                <span className="signup-alert-validation">
                                    {/* {simpleValidator.current.message(
                                        "name",
                                        name.current?.value || "",
                                        "required"
                                    )} */}
                                </span>
                            </Form.Group>
                        </Col>
                        <Col xs={4}>
                            <Form.Group id="color" className="mb-4">
                                <Form.Label>Color</Form.Label>
                                <Form.Select
                                    name="color"
                                    value={productData.color}
                                    onChange={(e: any) => {
                                        onHandleChange(e)
                                    }}
                                >
                                    <option value="">Select</option>
                                    <option value="red">Red</option>
                                    <option value="grren">Grren</option>
                                </Form.Select>
                                <span className="signup-alert-validation">
                                    {/* {simpleValidator.current.message(
                                        "name",
                                        name.current?.value || "",
                                        "required"
                                    )} */}
                                </span>
                            </Form.Group>
                        </Col>
                        <Col xs={4}>
                            <Form.Group id="name" className="mb-4">
                                <Form.Label>Price per piece weight</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        required
                                        name="price_per_piece_weight"
                                        value={productData.price_per_piece_weight}
                                        type="number"
                                        autoFocus={true}
                                        // ref={name}
                                        placeholder="Enter Product Name"
                                        onChange={(e: any) => {
                                            onHandleChange(e)
                                        }}
                                    />
                                </InputGroup>
                                <span className="signup-alert-validation">
                                    {/* {simpleValidator.current.message(
                                        "name",
                                        name.current?.value || "",
                                        "required"
                                    )} */}
                                </span>
                            </Form.Group>
                        </Col>
                        <Col xs={4}>
                            <Form.Group id="name" className="mb-4">
                                <Form.Label>Production per piece weight</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        required
                                        name="production_per_piece_weight"
                                        value={productData.production_per_piece_weight}
                                        type="number"
                                        autoFocus={true}
                                        // ref={name}
                                        placeholder="Enter Product Name"
                                        onChange={(e: any) => {
                                            onHandleChange(e)
                                        }}
                                    />
                                </InputGroup>
                                <span className="signup-alert-validation">
                                    {/* {simpleValidator.current.message(
                                        "name",
                                        name.current?.value || "",
                                        "required"
                                    )} */}
                                </span>
                            </Form.Group>
                        </Col>
                        <Col xs={4}>
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
                                    {/* {simpleValidator.current.message(
                                        "name",
                                        name.current?.value || "",
                                        "required"
                                    )} */}
                                </span>
                            </Form.Group>
                        </Col>
                        <Col xs={4}>
                            <Form.Group id="product_ml_actual" className="mb-4">
                                <Form.Label>Product ml actual</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        required
                                        name="product_ml_actual"
                                        value={productData.product_ml_actual}
                                        type="number"
                                        autoFocus={true}
                                        // ref={name}
                                        placeholder="Enter product ml actual"
                                        onChange={(e: any) => {
                                            onHandleChange(e)
                                        }}
                                    />
                                </InputGroup>
                                <span className="signup-alert-validation">
                                    {/* {simpleValidator.current.message(
                                        "name",
                                        name.current?.value || "",
                                        "required"
                                    )} */}
                                </span>
                            </Form.Group>
                        </Col>
                        <Col xs={4}>
                            <Form.Group id="product_final_height_mm" className="mb-4">
                                <Form.Label>Product final height mm</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        required
                                        name="product_final_height_mm"
                                        value={productData.product_final_height_mm}
                                        type="number"
                                        autoFocus={true}
                                        // ref={name}
                                        placeholder="Enter product final height mm"
                                        onChange={(e: any) => {
                                            onHandleChange(e)
                                        }}
                                    />
                                </InputGroup>
                                <span className="signup-alert-validation">
                                    {/* {simpleValidator.current.message(
                                        "name",
                                        name.current?.value || "",
                                        "required"
                                    )} */}
                                </span>
                            </Form.Group>
                        </Col>
                        <Col xs={4}>
                            <Form.Group id="product_current_height_mm" className="mb-4">
                                <Form.Label>Product current height mm</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        required
                                        name="product_current_height_mm"
                                        value={productData.product_current_height_mm}
                                        type="number"
                                        autoFocus={true}
                                        // ref={name}
                                        placeholder="Enter product current height mm"
                                        onChange={(e: any) => {
                                            onHandleChange(e)
                                        }}
                                    />
                                </InputGroup>
                                <span className="signup-alert-validation">
                                    {/* {simpleValidator.current.message(
                                        "name",
                                        name.current?.value || "",
                                        "required"
                                    )} */}
                                </span>
                            </Form.Group>
                        </Col>
                        <Col xs={4}>
                            <Form.Group id="HSN_code" className="mb-4">
                                <Form.Label>HSN code</Form.Label>
                                <Form.Select
                                    name="HSN_code"
                                    value={productData.HSN_code}
                                    onChange={(e: any) => {
                                        onHandleChange(e)
                                    }}
                                >
                                    <option value="">Select</option>
                                    <option value="1323">1323</option>
                                    <option value="42343">42343</option>

                                </Form.Select>
                                <span className="signup-alert-validation">
                                    {/* {simpleValidator.current.message(
                                        "name",
                                        name.current?.value || "",
                                        "required"
                                    )} */}
                                </span>
                            </Form.Group>
                        </Col>
                        <Col xs={4}>
                            <Form.Group id="GST_percentage" className="mb-4">
                                <Form.Label>GST percentage</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        required
                                        name="GST_percentage"
                                        value={productData.GST_percentage}
                                        type="number"
                                        autoFocus={true}
                                        // ref={name}
                                        placeholder="Enter GST percentage"
                                        onChange={(e: any) => {
                                            onHandleChange(e)
                                        }}
                                    />
                                </InputGroup>
                                <span className="signup-alert-validation">
                                    {/* {simpleValidator.current.message(
                                        "name",
                                        name.current?.value || "",
                                        "required"
                                    )} */}
                                </span>
                            </Form.Group>
                        </Col>
                        <Col xs={4}>
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
                                    {/* {simpleValidator.current.message(
                                        "name",
                                        name.current?.value || "",
                                        "required"
                                    )} */}
                                </span>
                            </Form.Group>
                        </Col>

                    </Row>
                </Card.Body>

            </Card>
        </div>
    )
}

export default AddProduct