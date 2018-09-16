import axios from 'axios';

export function fetchUsers() {
    return {
        type: 'FETCH_USER_FULFILLED',
        payload: {
            name: 'Jacob',
            age: 22
        }
    }
}

export function fetchUserFromAPI() {
    return function(dispatch) {
        axios.get('https://api.myjson.com/bins/1bd7og')
            .then((response) => {
                dispatch({type: 'FETCH_USER_FROM_API_FULFILLED', payload: response.data});
            })
            .catch((err) => {
                dispatch({type: 'FETCH_USER_FROM_API_REJECTED', payload: err});
            });
    }
}