import axios from 'axios';
import { CREATE_HSN, GET_GST_DROPDOWN, GET_HSN, httpOption } from '../helper/API'

function useHSN() {
    const getHSNList = async (search: string, per_page: number, page_number: number) => {
        const GET_HSN_LIST = `${GET_HSN}?per_page=${per_page}&page_number=${page_number}`;
        if (search.length) {
            GET_HSN_LIST.concat(`&search=${search}`)
        }
        try {
            const res = await axios.get(`${GET_HSN_LIST}`, httpOption());
            return res;
        } catch (err) {
            return err;
        }
    }

    const createHSN = async (data: any) => {

        try {
            const res = await axios.post(`${CREATE_HSN}`, data, httpOption());
            return res;
        } catch (err) {
            return err;
        }
    }

    const editHSN = async (data: any) => {

        try {
            const res = await axios.post(`${CREATE_HSN}`, data, httpOption());
            return res;
        } catch (err) {
            return err;
        }
    }

    const getGST = async () => {

        try {
            const res = await axios.get(`${GET_GST_DROPDOWN}`, httpOption());
            return res;
        } catch (err) {
            return err;
        }
    }



    return {
        getHSNList,
        createHSN,
        editHSN,
        getGST
    }
}

export default useHSN