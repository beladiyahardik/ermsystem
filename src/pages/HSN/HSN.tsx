import React from 'react'
import Table from '../../components/table/Table';

export const HSN = () => {
    const columns = [
        // { field: 'id', headerName: 'ID' },
        { field: 'HSN_CODE', headerName: 'HSN Code', width: 150 },
        { field: 'GST_PERCENTAGE', headerName: 'GST %', width: 150 },
        { field: 'Remarks', headerName: 'Remarks', width: 150 },
    ];

    const rows = [
        { id: 1, HSN_CODE: 'Red', GST_PERCENTAGE: '18%', Remarks: 35 },
        { id: 2, HSN_CODE: 'Green', GST_PERCENTAGE: '16.5%', Remarks: 42 },
        { id: 3, HSN_CODE: 'Yello', GST_PERCENTAGE: '12%', Remarks: 45 },
        { id: 4, HSN_CODE: 'Pink', GST_PERCENTAGE: '11%', Remarks: 16 },
    ];

    return (
        <div className='h-50 mt-5'>
            <h4>HSN</h4>
            <Table rows={rows} columns={columns} />
        </div>
    )
}
