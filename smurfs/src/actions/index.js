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