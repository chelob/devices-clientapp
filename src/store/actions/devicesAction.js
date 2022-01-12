import { GET_DEVICES, GET_DEVICE, REMOVE_DEVICE, DEVICES_ERROR, ADD_EDIT_DEVICE, SORT_BY, SET_DEVICE_TYPE } from '../types'
import axios from 'axios'

export const getDevices = () => async dispatch => {
    try {
        const res = await axios.get(`http://localhost:3000/devices`);
        dispatch({
            type: GET_DEVICES,
            payload: res.data
        });
    }
    catch (e) {
        dispatch({
            type: DEVICES_ERROR,
            payload: console.log(e),
        });
    }
}

export const getDevice = (id) => async dispatch => {
    try {
        const res = await axios.get(`http://localhost:3000/devices/${id}`);
        dispatch({
            type: GET_DEVICE,
            payload: res.data
        });
    }
    catch (e) {
        dispatch({
            type: DEVICES_ERROR,
            payload: console.log(e),
        });
    }
}

export const removeDevice = (id) => async dispatch => {
    try {
        const res = await axios.delete(`http://localhost:3000/devices/${id}`);
        dispatch({
            type: REMOVE_DEVICE,
            payload: res.data
        });
    }
    catch (e) {
        dispatch({
            type: DEVICES_ERROR,
            payload: console.log(e),
        });
    }
}

export const addEditDevice = (device, id) => async dispatch => {
    try {
        let res = '';
        if(id){
            res = await axios.put(`http://localhost:3000/devices/${id}`, device);
        } else {
            res = await axios.post(`http://localhost:3000/devices`, device);
        }
        dispatch({
            type: ADD_EDIT_DEVICE,
            payload: res.data
        });
    }
    catch (e) {
        dispatch({
            type: DEVICES_ERROR,
            payload: console.log(e),
        });
    }
}

export const sortBy = (sort_by) => async dispatch => {
    try {
        dispatch({
            type: SORT_BY,
            payload: sort_by
        });
    }
    catch (e) {
        dispatch({
            type: DEVICES_ERROR,
            payload: console.log(e),
        });
    }
}

export const setDeviceType = (device_type) => async dispatch => {
    try {
        dispatch({
            type: SET_DEVICE_TYPE,
            payload: device_type
        });
    }
    catch (e) {
        dispatch({
            type: SET_DEVICE_TYPE,
            payload: console.log(e),
        });
    }
}