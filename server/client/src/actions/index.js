import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async dispatch => {
        const res = await axios.get('/api/current_user')
        dispatch({ type: FETCH_USER, payload: res.data })
    } //Use thunk to wait until we've received our promise and then dispatch it