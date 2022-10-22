import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Table from '../../components/table/Table';
import useGST from '../../hooks/useGST';
import * as Icon from 'react-bootstrap-icons';

const GSTManager = () => {
    const { getGSTList, deleteGST } = useGST();
    const [gstList, setGSTList] = useState();
    const navigate = useNavigate()

    const Edit = (data: any) => {
        navigate(`/gst/add?id=${data.id}`)
    }

    const DeleteGST = (data: any) => {
        deleteGST(data.id).then((res: any) => {
            if (res.data.success) {
                toast.success(res.data.message);
                gridData();
            } else {
                toast.error(res.data.message)
            }
        }).catch((err) => {
            console.log('err', err);
        })
    }
    const columns = [
        // { field: 'id', headerName: 'ID' },
        { field: 'gst_percentage', headerName: 'GST %', flex: 1 },
        { field: 'from_date', headerName: 'From Date', flex: 1 },
        { field: 'to_date', headerName: 'To Date', flex: 1 },
        { field: 'remarks', headerName: 'Remarks', flex: 1 },
        {
            field: "id",
            headerName: "Action",
            sortable: false,
            renderCell: (params: any) => {
                return (<><button type="button" className="btn btn-light" onClick={() => Edit(params)}><Icon.PenFill /></button>
                    <button type="button" className="btn btn-danger mx-1" onClick={(e: any) => { e.stopPropagation(); DeleteGST(params) }}><Icon.Trash2 /></button></>);
            },
            flex: 1
        },
    ];

    const rows = [
        { id: 1, gst_per: '12%', from_date: '12-09-2021', to_date: '12-09-2021', remarks: 'test' },
        { id: 2, gst_per: '18%', from_date: '12-09-2021', to_date: '12-09-2021', remarks: 'test' },
        { id: 3, gst_per: '16.5%', from_date: '12-09-2021', to_date: '12-09-2021', remarks: 'test' },
        { id: 4, gst_per: '12.5%', from_date: '12-09-2021', to_date: '12-09-2021', remarks: 'test' },
    ];

    useEffect(() => {
        gridData()
    }, [])

    const gridData = () => {
        getGSTList('', 10, 1).then((res: any) => {
            setGSTList(res.data.data.gst)
        }).catch((err) => {
            console.log('err', err);
        })
    }


    return (
        <div className='h-50 mt-5'>
            <div className='d-flex justify-content-between pb-2'>
                <h4>GST</h4>
                <button type="button" className="btn btn-primary" onClick={() => navigate("/gst/add")}>Add</button>
            </div>
            {gstList &&

                <Table rows={gstList} columns={columns} />
            }
        </div>
    )
}

export default GSTManager