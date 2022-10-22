import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Table from '../../components/table/Table';
import useHSN from '../../hooks/useHSN';
import * as Icon from 'react-bootstrap-icons';

export const HSN = () => {
    const navigate = useNavigate()
    const { getHSNList } = useHSN();
    const [hsnList, setHSNList] = useState();
    const columns = [
        // { field: 'id', headerName: 'ID' },
        { field: 'hsn_code', headerName: 'HSN Code' },
        { field: 'gst_per', headerName: 'GST %' },
        { field: 'remarks', headerName: 'Remarks' },
        {
            field: "id",
            headerName: "Action",
            sortable: false,
            renderCell: (params: any) => {
                return (<><button type="button" className="btn btn-light" onClick={() => Edit(params)}><Icon.PenFill /></button><button type="button" className="btn btn-danger mx-1"><Icon.Trash2 /></button></>);
            }
        },
    ];

    const Edit = (data: any) => {
        navigate(`/hsn/add?id=${data.id}`)
    }

    const rows = [
        { id: 1, HSN_CODE: 'Red', GST_PERCENTAGE: '18%', Remarks: 35 },
        { id: 2, HSN_CODE: 'Green', GST_PERCENTAGE: '16.5%', Remarks: 42 },
        { id: 3, HSN_CODE: 'Yello', GST_PERCENTAGE: '12%', Remarks: 45 },
        { id: 4, HSN_CODE: 'Pink', GST_PERCENTAGE: '11%', Remarks: 16 },
    ];

    useEffect(() => {
        gridData()
    }, [])

    const gridData = () => {
        getHSNList('', 10, 1).then((res: any) => {
            console.log('temp', res.data.hsnCode)
            setHSNList(res.data.data.hsnCode)
        }).catch((err) => {
            console.log('err', err);
        })
    }

    return (
        <div className='h-50 mt-5'>
            <div className='d-flex justify-content-between pb-2'>
                <h4>HSN</h4>
                <button type="button" className="btn btn-primary" onClick={() => navigate("/hsn/add")}>Add</button>
            </div>
            {hsnList &&
                <Table rows={hsnList} columns={columns} />
            }
        </div>
    )
}
