import React from 'react'
import Table from '../../components/table/Table';

const GSTManager = () => {
    const columns = [
        // { field: 'id', headerName: 'ID' },
        { field: 'gst_per', headerName: 'GST %', width: 150 },
        { field: 'from_date', headerName: 'From Date' },
        { field: 'to_date', headerName: 'To Date' },
        { field: 'remarks', headerName: 'Remarks' },
    ];

    const rows = [
        { id: 1, gst_per: '12%', from_date: '12-09-2021', to_date: '12-09-2021', remarks: 'test' },
        { id: 2, gst_per: '18%', from_date: '12-09-2021', to_date: '12-09-2021', remarks: 'test' },
        { id: 3, gst_per: '16.5%', from_date: '12-09-2021', to_date: '12-09-2021', remarks: 'test' },
        { id: 4, gst_per: '12.5%', from_date: '12-09-2021', to_date: '12-09-2021', remarks: 'test' },
    ];

    return (
        <div className='h-50 mt-5'>
            <h4>GST %</h4>
            <Table rows={rows} columns={columns} />
        </div>
    )
}

export default GSTManager