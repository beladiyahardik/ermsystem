const baseURL = 'http://localhost:5001'

export const httpOption = () => {
    return {
        headers: {
            'Content-Type': 'application/json',
        },
    }
}

export const GET_COLOR_LIST = `${baseURL}/api/v1/color/get-color-list`;
export const GET_COLOR_BY_ID = `${baseURL}/api/v1/color/get-color-by-id`;
export const ADD_COLOR = `${baseURL}/api/v1/color/add`;
export const EDIT_COLOR = `${baseURL}/api/v1/color/edit`;
export const REMOVE_COLOR = `${baseURL}/api/v1/color/delete`;


export const CREATE_HSN = `${baseURL}/api/v1/hsncode/add`
export const EDIT_HSN = `${baseURL}/api/v1/hsncode/edit`
export const DELETE_HSN = `${baseURL}/api/v1/hsncode/delete`
export const GET_HSN = `${baseURL}/api/v1/hsncode/get-hsn-code-list`
export const GET_HSN_BY_ID = `${baseURL}/api/v1/hsncode/get-hsn-code-by-id`
export const GET_GST_DROPDOWN = `${baseURL}/api/v1/gst/get-gst-dropdown`


export const CREATE_GST = `${baseURL}/api/v1/gst/add`
export const EDIT_GST = `${baseURL}/api/v1/gst/edit`
export const DELETE_GST = `${baseURL}/api/v1/gst/delete`
export const GET_GST = `${baseURL}/api/v1/gst/get-gst-list`
export const GET_GST_BY_ID = `${baseURL}/api/v1/gst/get-gst-by-id`
export const GET_COLOR_DROPDOWN = `${baseURL}/api/v1/color/get-color-dropdown`;

//HSN
export const GET_HSN_DROPDOWN = `${baseURL}/api/v1/hsncode/get-hsn-code-dropdown`;

// Product
export const GET_PRODUCT_LIST = `${baseURL}/api/v1/product/get-product-list`;
export const CREATE_PRODUCT = `${baseURL}/api/v1/product/add`;
export const EDIT_PRODUCT = `${baseURL}/api/v1/product/edit`;
export const DELETE_PRODUCT = `${baseURL}/api/v1/product/delete`;
export const GET_PRODUCT_BY_ID = `${baseURL}/api/v1/product/get-product-by-id`;
