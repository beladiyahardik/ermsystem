const baseURL = 'http://localhost:5001'

export const httpOption = () => {
    return {
        headers: {
            'Content-Type': 'application/json',
        },
    }
}

export const GET_COLOR_LIST = `${baseURL}/api/v1/color/get-color-list`;
export const GET_COLOR_DROPDOWN = `${baseURL}/api/v1/color/get-color-dropdown`;

//HSN
export const GET_HSN_DROPDOWN = `${baseURL}/api/v1/hsncode/get-hsn-code-dropdown`;

// Product
export const GET_PRODUCT_LIST = `${baseURL}/api/v1/product/get-product-list`;
export const CREATE_PRODUCT = `${baseURL}/api/v1/product/add`;
export const EDIT_PRODUCT = `${baseURL}/api/v1/product/edit`;
export const DELETE_PRODUCT = `${baseURL}/api/v1/product/delete`;
export const GET_PRODUCT_BY_ID = `${baseURL}/api/v1/product/get-product-by-id`;