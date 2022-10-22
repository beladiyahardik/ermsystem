import React, { useEffect, useState } from 'react'
import Table from '../../components/table/Table'
import useColor from '../../hooks/useColor';
import { toast } from 'react-toastify';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons';

export const ColorMaster = () => {
    const { getColorList, removeColor } = useColor();
    const [colorList, setColorList] = useState([]);
    const [search, setSearch] = useState('');
    const [pageNumber, setPageNumber] = useState(1);
    const [perPage, setPerPage] = useState(10);

    const navigate = useNavigate();

    const columns = [
        { field: 'name', headerName: 'Name', flex: 1 },
        { field: 'color_code', headerName: 'Color code', flex: 1 },
        {
            field: "id",
            headerName: "Action",
            sortable: false,
            renderCell: (params: any) => {
                return (<><button type="button" className="btn btn-light" onClick={() => editColor(params)}><Icon.PenFill /></button>
                    <button type="button" className="btn btn-danger mx-1" onClick={(e: any) => { e.stopPropagation(); deleteColor(params) }}><Icon.Trash2 /></button></>);
            },
            flex: 1
        },
    ];

    useEffect(() => {
        getList();
    }, [])

    const getList = () => {
        getColorList(search, perPage, pageNumber).then((res: any) => {
            const { success, message } = res.data
            const { data: { color, AllCount, count } } = res.data
            if (success) {
                setColorList(color);
                // toast.success(message)
            }
        }).catch((err) => {
            console.log('err', err);
            toast.error('Something went wrong')
        })
    }

    const addNewColor = () => {
        navigate('/color-master/add-color')
    }

    const onPageChange = (count: number) => {
        console.log(count, 'count');
    }

    const editColor = (params: any) => {
        navigate(`/color-master/edit-color/${params.id}`)
    }

    const deleteColor = (id: any) => {
        removeColor(id.id).then((res: any) => {
            const { success, message } = res.data
            if (success) {
                toast.success(message)
                getList()
            }
        }).catch((err) => {
            toast.error('Something went wrong')
        })
    }

    return (
        <div className='h-75 mt-2'>
            <div className='w-100 d-flex justify-content-between py-3'>
                <h4>Color Master</h4>
                <Button onClick={addNewColor}>Add color</Button>
            </div>
            <Table rows={colorList} columns={columns} onPageChange={onPageChange} />
        </div>
    )
}
