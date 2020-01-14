import { ADD_ONE, MINUS_ONE } from './types';


export const addOne = () => dispatch => {

    dispatch({
        type: ADD_ONE,
        payload: 1
    })
}

export const minusOne = () => dispatch => {

    dispatch({
        type: MINUS_ONE,
        payload: 1
    })
    
}