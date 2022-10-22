import React, { useState, useEffect } from 'react'
import { Card, Col, Form, InputGroup, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useGST from '../../hooks/useGST';

interface GSTData {
    gst_percentage: number,
    from_date: string,
    to_date: string,
    remarks: string,
}

interface GSTDataError {
    gst_percentage: string,
    from_date: string,
    to_date: string,
}

const AddGST = () => {
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get("id")
    const { createGST, getGSTByID, updateGST } = useGST();
    const [gstData, setGST] = useState<GSTData>({
        gst_percentage: 0,
        from_date: "",
        to_date: "",
        remarks: "",
    })

    const [gstDataError, setGSTError] = useState<GSTDataError>({
        gst_percentage: "",
        from_date: "",
        to_date: "",
    })

    const onHandleChange = (e: any) => {
        setGST({ ...gstData, [e.target.name]: e.target.value })
    }

    const validation = () => {
        var flag = true;
        let error: any = {
            gst_percentage: "",
            from_date: "",
            to_date: "",
        }

        if (gstData.gst_percentage == 0) {
            error.gst_percentage = 'Pelase Enter gst';
            flag = false;
        }
        if (!gstData.from_date) {
            error.from_date = 'Pelase Select Date';
            flag = false;
        }
        if (!gstData.to_date) {
            error.to_date = 'Pelase Select Date';
            flag = false;
        }
        setGSTError(error)
        return flag;
    }

    useEffect(() => {
        if (id) {
            getGSTByID(id).then((res: any) => {
                if (res.data.success) {
                    setGST({ ...gstData, gst_percentage: res.data.data.gst_percentage, from_date: res.data.data.from_date, to_date: res.data.data.to_date, remarks: res.data.data.remarks })
                } else {
                    toast.error(res.data.message)
                }

            }).catch((e: any) => {

            })

        }

    }, [id])

    const SaveGST = () => {
        if (!validation()) {
            return;
        }
        if (id) {
            updateGST(gstData, id).then((res: any) => {
                if (res.data.success) {
                    toast.success(res.data.message);
                    navigate("/gst")
                } else {
                    toast.error(res.data.message)
                }

            }).catch((e: any) => {

            })
        } else {
            createGST(gstData).then((res: any) => {
                if (res.data.success) {
                    toast.success(res.data.message);
                    navigate("/gst")
                } else {
                    toast.error(res.data.message)
                }

            }).catch((e: any) => {

            })
        }



    }


    return (
        <div className='h-100 mt-5'>
            <div className='d-flex justify-content-between pb-2'>
                <h4>{id ? "Edit" : "Add"} GST</h4>
            </div>

            <Card
                border="light"
                className="table-wrapper table-responsive shadow-lg mb-4"
            >
                <Card.Body className="pt-0">
                    <Row className="">
                        <Col lg={4} md={6} sm={12} xs={12}>
                            <Form.Group id="gst_percentage" className="mb-4">
                                <Form.Label>GST Per</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        required
                                        name="gst_percentage"
                                        value={gstData.gst_percentage}
                                        type="number"
                                        autoFocus={true}
                                        // ref={name}
                                        placeholder="Enter GST Percentage"
                                        onChange={(e: any) => {
                                            onHandleChange(e)
                                        }}
                                    />
                                </InputGroup>
                                <span className="signup-alert-validation text-danger">
                                    {gstDataError.gst_percentage}
                                </span>
                            </Form.Group>
                        </Col>
                        <Col lg={4} md={6} sm={12} xs={12}>
                            <Form.Group id="from_date" className="mb-4">
                                <Form.Label>From Date</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        required
                                        name="from_date"
                                        value={gstData.from_date}
                                        type="date"
                                        // ref={name}
                                        placeholder="Select Date"
                                        onChange={(e: any) => {
                                            onHandleChange(e)
                                        }}
                                    />
                                </InputGroup>
                                <span className="signup-alert-validation text-danger">
                                    {gstDataError.from_date}
                                </span>
                            </Form.Group>
                        </Col>
                        <Col lg={4} md={6} sm={12} xs={12}>
                            <Form.Group id="to_date" className="mb-4">
                                <Form.Label>From Date</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        required
                                        name="to_date"
                                        value={gstData.to_date}
                                        type="date"
                                        // ref={name}
                                        placeholder="Select Date"
                                        onChange={(e: any) => {
                                            onHandleChange(e)
                                        }}
                                    />
                                </InputGroup>
                                <span className="signup-alert-validation text-danger">
                                    {gstDataError.from_date}
                                </span>
                            </Form.Group>
                        </Col>

                        <Col lg={4} md={6} sm={12} xs={12}>
                            <Form.Group id="remarks" className="mb-4">
                                <Form.Label>Remarks</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        required
                                        name="remarks"
                                        value={gstData.remarks}
                                        type="text"
                                        // ref={name}
                                        placeholder="Enter Remark"
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
                    </Row>

                    <button type="button" className="btn btn-primary" onClick={() => SaveGST()}>Save</button>
                    <button type="button" className="btn btn btn-outline-dark ms-2" onClick={() => navigate("/hsn")}>Cancel</button>
                </Card.Body>

            </Card>
        </div>
    )
}

export default AddGST