import React, { useEffect, useState } from 'react'
import Table from '../../components/table/Table'
import useColor from '../../hooks/useColor';
import { toast } from 'react-toastify';

export const ColorMaster = () => {
    const { getColorList } = useColor();
    const [colorList, setColorList] = useState();
    const columns = [
        // { field: 'id', headerName: 'ID' },
        { field: 'name', headerName: 'Name', width: 150 },
        { field: 'colorCode', headerName: 'Color code' },
    ];

    const rows = [
        { id: 1, name: 'Red', colorCode: '#EREREE', age: 35 },
        { id: 2, name: 'Green', colorCode: '#K4FGFH', age: 42 },
        { id: 3, name: 'Yello', colorCode: '#34GHPQ', age: 45 },
        { id: 4, name: 'Pink', colorCode: '#ERYDHD', age: 16 },
    ];

    useEffect(() => {
        getColorList('', 1, 10).then((res: any) => {
            console.log('temp', res.data)
            toast.success('ff')
        }).catch((err) => {
            console.log('err', err);
        })
    }, [])


    return (
        <div className='h-50 mt-5'>
            <h4>Color Master</h4>
            <Table rows={rows} columns={columns} />
        </div>
    )
}
