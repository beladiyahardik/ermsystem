import axios from 'axios';
import { CREATE_HSN, DELETE_HSN, EDIT_HSN, GET_GST_DROPDOWN, GET_HSN, GET_HSN_BY_ID, httpOption } from '../helper/API'

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

    const updateHSN = async (data: any, id: any) => {

        try {
            const res = await axios.put(`${EDIT_HSN}/${id}`, data, httpOption());
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

    const getHSNByID = async (id: any) => {

        try {
            const res = await axios.get(`${GET_HSN_BY_ID}/${id}`, httpOption());
            return res;
        } catch (err) {
            return err;
        }
    }

    const deleteHSN = async (id: any) => {

        try {
            const res = await axios.delete(`${DELETE_HSN}/${id}`, httpOption());
            return res;
        } catch (err) {
            return err;
        }
    }



    return {
        getHSNList,
        createHSN,
        updateHSN,
        getGST,
        getHSNByID,
        deleteHSN
    }
}

export default useHSN