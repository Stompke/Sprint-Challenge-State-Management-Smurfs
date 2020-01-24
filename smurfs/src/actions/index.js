//ACTIONS

import axios from 'axios';

export const test = () => {
    return { type: 'TEST_CALL'};
}

export const fetchData = () => {
    return dispatch => {
        dispatch({type: 'FETCHING_DATA_START'});
        axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            dispatch({type: 'FETCHING_DATA_SUCCESS', payload: res.data})
        })
        .catch(err => {
            console.log(err)
        })
    }
}

export const postData = (newName,newAge,newHeight) => {
    return dispatch => {
        dispatch({ type: 'POSTING_DATA_START'});
        axios
        .post('http://localhost:3333/smurfs',
            {
             name: newName,
             age: newAge,
             height: newHeight,
             id: Date.now()
            }
        )
        .then(res => {
            dispatch({type: 'FETCHING_DATA_SUCCESS', payload: res.data})
        })
        .catch(err => {
            console.log(err)
        })
    }
}