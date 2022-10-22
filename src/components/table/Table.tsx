import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react'

const Table = ({ rows = [], columns = [], onPageChange }: any) => {
    return (
        <DataGrid
            rows={rows}
            columns={columns}
            pageSize={100}
            rowsPerPageOptions={[5]}
            // checkboxSelection
            rowHeight={60}
            onPageChange={onPageChange}
        />
    );
}

export default Table