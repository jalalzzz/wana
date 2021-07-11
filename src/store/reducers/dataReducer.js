import { GET_DATA, GET_DATA_BY_ID } from '../types'

const initialState = {
    data: [],
    loading: true,
    dataSelected: null
}

export default function(state = initialState, action) {

    console.log(action)

    switch (action.type) {

        case GET_DATA:
            return {
                ...state,
                data: action.payload,
                loading: false

            }
        case GET_DATA_BY_ID:

            return {
                ...state,
                dataSelected: state.data.filter(post => post.id === action.postId)


            }
        default:
            return state
    }

}