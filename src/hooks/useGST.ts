import axios from 'axios';
import { CREATE_GST, DELETE_GST, EDIT_GST, GET_GST, GET_GST_BY_ID, httpOption } from '../helper/API'

function useGST() {
    const getGSTList = async (search: string, per_page: number, page_number: number) => {
        const GET_HSN_LIST = `${GET_GST}?per_page=${per_page}&page_number=${page_number}`;
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

    const createGST = async (data: any) => {

        try {
            const res = await axios.post(`${CREATE_GST}`, data, httpOption());
            return res;
        } catch (err) {
            return err;
        }
    }

    const updateGST = async (data: any, id: any) => {

        try {
            const res = await axios.put(`${EDIT_GST}/${id}`, data, httpOption());
            return res;
        } catch (err) {
            return err;
        }
    }



    const getGSTByID = async (id: any) => {

        try {
            const res = await axios.get(`${GET_GST_BY_ID}/${id}`, httpOption());
            return res;
        } catch (err) {
            return err;
        }
    }

    const deleteGST = async (id: any) => {

        try {
            const res = await axios.delete(`${DELETE_GST}/${id}`, httpOption());
            return res;
        } catch (err) {
            return err;
        }
    }



    return {
        getGSTList,
        createGST,
        updateGST,
        getGSTByID,
        deleteGST
    }
}

export default useGST