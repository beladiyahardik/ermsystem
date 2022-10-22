const baseURL = 'http://localhost:5001'

export const httpOption = () => {
    return {
        headers: {
            'Content-Type': 'application/json',
        },
    }
}

export const GET_COLOR_LIST = `${baseURL}/api/v1/color/get-color-list`;




export const CREATE_HSN = `${baseURL}/api/v1/hsncode/add`
export const EDIT_HSN = `${baseURL}/api/v1/hsncode/edit`
export const DELETE_HSN = `${baseURL}/api/v1/hsncode/delete`
export const GET_HSN = `${baseURL}/api/v1/hsncode/get-hsn-code-list`
export const GET_HSN_BY_ID = `${baseURL}/api/v1/hsncode/get-hsn-code-by-id`
export const GET_GST_DROPDOWN = `${baseURL}/api/v1/gst/get-gst-dropdown`