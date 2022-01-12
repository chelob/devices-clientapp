import { GET_DEVICES, GET_DEVICE, ADD_EDIT_DEVICE, SORT_BY, SET_DEVICE_TYPE } from '../types'
import { sortBy } from '../../utils/utils'

const initialState = {
    devices: [],
    device: {},
    sortBy: "",
    loading: true
}

export default function (state = initialState, action) {

    switch (action.type) {
        case GET_DEVICES:
            return {
                ...state,
                devices: action.payload,
                device: {},
                loading: false,
                sortBy: ""
            }
        case GET_DEVICE:
            return {
                ...state,
                device: action.payload,
                devices: [],
                loading: false,
                sortBy: ""
            }

        case ADD_EDIT_DEVICE:
            return {
                ...state,
                device: action.payload,
                devices: [],
                loading: false,
                sortBy: ""
            }

        case SORT_BY:
            const sortingProperty = action.payload.includes("TYPE")?'type':action.payload.includes("HDD")?'hdd_capacity':'system_name';
            const sortingOrder = action.payload.includes("Asc")?'ASC':'DESC';
            return {
                ...state,
                sortBy: action.payload,
                devices: sortBy(sortingProperty, sortingOrder, state.devices)
            
        }
        case SET_DEVICE_TYPE: 
            return {
                ...state,
                device: {...state.device, type: action.payload},
                devices: [],
                loading: false,
                sortBy: ""
            }

        default: return state
    }

}