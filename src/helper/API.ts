const baseURL = 'http://localhost:5001'

export const httpOption = () => {
    return {
        headers: {
            'Content-Type': 'application/json',
        },
    }
}

export const GET_COLOR_LIST = `${baseURL}/api/v1/color/get-color-list`;