import { GET_DATA, GET_DATA_BY_ID } from '../types'

const initialState = {
    data: [],
    loading: true,
    dataSelected: null
}

export default function(state = initialState, action) {


    switch (action.type) {

        case GET_DATA:
            return {
                ...state,
                data: action.payload,
                loading: false

            }

        default:
            return state
    }

}