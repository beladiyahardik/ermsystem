import axios from 'axios';
import { CREATE_PRODUCT, GET_PRODUCT_BY_ID, GET_HSN_DROPDOWN, GET_PRODUCT_LIST, EDIT_PRODUCT, DELETE_PRODUCT, httpOption } from '../helper/API'
import { ProductData } from '../pages/Product/AddProduct';

function useProduct() {
    const getProductList = async (color_id: string, hsn_id: string, search: string, per_page: number, page_number: number) => {
        const GET_PRODUCT = `${GET_PRODUCT_LIST}?per_page=${per_page}&page_number=${page_number}`;
        if (search.length) {
            GET_PRODUCT.concat(`&search=${search}`)
        }
        if (color_id.length) {
            GET_PRODUCT.concat(`&color_id=${color_id}`)
        }
        if (hsn_id.length) {
            GET_PRODUCT.concat(`&hsn_id=${hsn_id}`)
        }
        try {
            const res = await axios.get(`${GET_PRODUCT}`, httpOption());
            return res;
        } catch (err) {
            return err;
        }
    }

    const getProductById = async (id: string | null) => {
        try {
            const res = await axios.get(`${GET_PRODUCT_BY_ID}/${id}`, httpOption());
            return res;
        } catch (err) {
            return err;
        }
    }

    const createProduct = async (body: ProductData) => {
        try {
            const res = await axios.post(`${CREATE_PRODUCT}`, body, httpOption());
            return res;
        } catch (err) {
            return err;
        }
    }

    const editProduct = async (id: string | null, body: ProductData) => {
        try {
            const res = await axios.put(`${EDIT_PRODUCT}/${id}`, body, httpOption());
            return res;
        } catch (err) {
            return err;
        }
    }

    const deleteProduct = async (id: string | null) => {
        try {
            const res = await axios.delete(`${DELETE_PRODUCT}/${id}`, httpOption());
            return res;
        } catch (err) {
            return err;
        }
    }

    const getHSNDropdown = async () => {
        try {
            const res = await axios.get(`${GET_HSN_DROPDOWN}`, httpOption());
            return res;
        } catch (err) {
            return err;
        }
    }

    return {
        getProductList,
        createProduct,
        getProductById,
        deleteProduct,
        getHSNDropdown,
        editProduct
    }
}

export default useProduct