import { DataGrid } from '@mui/x-data-grid';
const Table = ({ rows, columns }: any) => {
    debugger
    return (
        <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
        />
    );
}

export default Table