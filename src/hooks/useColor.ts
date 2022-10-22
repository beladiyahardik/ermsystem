import axios from 'axios';
import { ADD_COLOR, GET_COLOR_DROPDOWN, GET_COLOR_LIST, httpOption } from '../helper/API'
import { COLORBODY } from '../types/type';

function useColor() {
    const getColorList = async (search: string, per_page: number, page_number: number) => {
        const GET_COLOR = `${GET_COLOR_LIST}?per_page=${per_page}&page_number=${page_number}`;
        if (search.length) {
            GET_COLOR.concat(`&search=${search}`)
        }
        try {
            const res = await axios.get(`${GET_COLOR}`, httpOption());
            return res;
        } catch (err) {
            return err;
        }
    }

    const addColor = async (body: COLORBODY) => {
        try {
            const res = await axios.post(`${ADD_COLOR}`, body, httpOption());
            return res;
        } catch (err) {
            return err;
        }
    }

    const getColorDropdown = async () => {
        try {
            const res = await axios.get(`${GET_COLOR_DROPDOWN}`, httpOption());
            return res;
        } catch (err) {
            return err;
        }
    }

    return {
        getColorList,
        addColor,
        getColorDropdown
    }
}

export default useColor