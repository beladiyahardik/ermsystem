import React, { useState, useEffect } from 'react'
import { Card, Col, Form, InputGroup, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useHSN from '../../hooks/useHSN';

interface HSNData {
    hsn_code: string,
    gst_id: string,
    remarks: string,
}

interface HSNDataError {
    hsn_code: string,
    gst_id: string
}

const AddHSN = () => {
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get("id")
    const { createHSN, getGST, getHSNByID, updateHSN } = useHSN();
    const [hsnData, setHSN] = useState<HSNData>({
        hsn_code: "",
        gst_id: "",
        remarks: "",
    })

    const [hsnDataError, setHSNError] = useState<HSNDataError>({
        hsn_code: "",
        gst_id: ""
    })

    const [gstData, setGSTData] = useState<any[]>([])

    const onHandleChange = (e: any) => {
        setHSN({ ...hsnData, [e.target.name]: e.target.value })
    }

    const validation = () => {
        var flag = true;
        let error: any = {
            hsn_code: "",
            gst_id: ""
        }

        if (!hsnData.hsn_code) {
            error.hsn_code = 'Pelase Enter HSN Code';
            flag = false;
        }
        if (!hsnData.gst_id) {
            error.gst_id = 'Pelase Select Gst';
            flag = false;
        }
        setHSNError(error)
        return flag;
    }

    useEffect(() => {
        console.log(id)
        if (id) {
            getHSNByID(id).then((res: any) => {
                if (res.data.success) {
                    debugger;
                    setHSN({ ...hsnData, hsn_code: res.data.data.hsn_code, gst_id: res.data.data.gst_id, remarks: res.data.data.remarks })
                } else {
                    toast.error(res.data.message)
                }

            }).catch((e: any) => {

            })

        }

    }, [id])

    const SaveHSN = () => {
        if (!validation()) {
            return;
        }
        if (id) {
            updateHSN(hsnData, id).then((res: any) => {
                if (res.data.success) {
                    toast.success(res.data.message);
                    navigate("/hsn")
                } else {
                    toast.error(res.data.message)
                }

            }).catch((e: any) => {

            })
        } else {
            createHSN(hsnData).then((res: any) => {
                if (res.data.success) {
                    toast.success(res.data.message);
                    navigate("/hsn")
                } else {
                    toast.error(res.data.message)
                }

            }).catch((e: any) => {

            })
        }



    }

    const GetGst = () => {
        getGST().then((res: any) => {
            setGSTData(res.data.data.gst)
        }).catch((e: any) => {
            setGSTData([])
        })
    }

    useEffect(() => {
        GetGst()
    }, [])


    return (
        <div className='h-100 mt-5'>
            <div className='d-flex justify-content-between pb-2'>
                <h4>Add HSN</h4>
            </div>

            <Card
                border="light"
                className="table-wrapper table-responsive shadow-sm mb-4 p-4"
            >
                <Card.Body className="pt-0">
                    <Row className="align-items-end">
                        <Col xs={4}>
                            <Form.Group id="name" className="mb-4">
                                <Form.Label>Hsn Code</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        required
                                        name="hsn_code"
                                        value={hsnData.hsn_code}
                                        type="text"
                                        autoFocus={true}
                                        // ref={name}
                                        placeholder="Enter HSN Code"
                                        onChange={(e: any) => {
                                            onHandleChange(e)
                                        }}
                                    />
                                </InputGroup>
                                <span className="signup-alert-validation text-danger">
                                    {hsnDataError.hsn_code}
                                </span>
                            </Form.Group>
                        </Col>
                        <Col xs={4}>
                            <Form.Group id="gst_id" className="mb-4">
                                <Form.Label>Gst</Form.Label>
                                <Form.Select
                                    name="gst_id"
                                    value={hsnData.gst_id}
                                    onChange={(e: any) => {
                                        onHandleChange(e)
                                    }}
                                >
                                    <option value="">Select</option>
                                    {gstData.map((x: any) => (
                                        <option value={x.id}>{x.gst_percentage}</option>
                                    ))}
                                </Form.Select>
                                <span className="signup-alert-validation text-danger">
                                    {hsnDataError.gst_id}
                                </span>
                            </Form.Group>
                        </Col>
                        <Col xs={4}>
                            <Form.Group id="remarks" className="mb-4">
                                <Form.Label>remarks</Form.Label>
                                <InputGroup>
                                    <Form.Control
                                        required
                                        name="remarks"
                                        value={hsnData.remarks}
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

                    <button type="button" className="btn btn-primary" onClick={() => SaveHSN()}>Save</button>
                    <button type="button" className="btn btn-light" onClick={() => navigate("/hsn")}>Back</button>
                </Card.Body>

            </Card>
        </div>
    )
}

export default AddHSN