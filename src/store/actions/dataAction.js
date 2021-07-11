import { DATA_ERROR, GET_DATA ,GET_DATA_BY_ID} from '../types'
import axios from 'axios'


export const getData = () => async dispatch => {

    try {
        const res = await axios.get(`https://csoproject-a9dbc-default-rtdb.firebaseio.com/association.json`)
            .then(response => {
                const posts = response.data;
                console.log(posts);
                let postsArray = [];


                const updatedPosts = Object.keys(posts).map(function (key, index) {
                    var obj = new Object();
                    obj = posts[key]
                    obj["id"] = key;
                    postsArray.push(obj);
                    // console.log(postsArray.length);

                });


                dispatch({
                    type: GET_DATA,
                    payload: postsArray
                })
            })

    }
    catch (e) {
        dispatch({
            type: DATA_ERROR,
            payload: console.log(e),
        })
    }

}

export const getDataById = (id) =>  dispatch =>({type: GET_DATA_BY_ID, postId: id})

