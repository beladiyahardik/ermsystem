import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useColor from '../../hooks/useColor';
import { COLORBODY } from '../../types/type';

const AddColor = () => {
    const { addColor } = useColor();
    const navigate = useNavigate();
    const [color, setColor] = useState<COLORBODY>({ name: '', color_code: '' });

    return (
        <div className='h-50 mt-5'>
            <h4>AddColor</h4>
            <Form className='mt-5' onSubmit={(e) => {
                e.preventDefault();
                addColor(color).then((res: any) => {
                    const { success, message } = res.data
                    if (success) {
                        navigate('/color-master')
                        toast.success(message)
                    }
                })
            }
            }>
                <div className='d-flex w-25 justify-content-between'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Color Name</Form.Label>
                        <Form.Control type="text" placeholder="Color name" onChange={(e) => setColor({ ...color, name: e.target.value })} value={color.name} required />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Color Code</Form.Label>
                        <Form.Control type="color" onChange={(e) => setColor({ ...color, color_code: e.target.value })} value={color.color_code} required />
                        <Form.Text>
                            {color.color_code}
                        </Form.Text>
                    </Form.Group>
                </div>
                <Button variant="primary" type="submit">
                    Add color
                </Button>
            </Form>
        </div>
    )
}

export default AddColor