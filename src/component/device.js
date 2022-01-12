import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getDevice, addEditDevice , setDeviceType} from '../store/actions/devicesAction';
import { useNavigate, useParams } from 'react-router-dom'


function Device() {
    let state = null;
    state = useSelector(state => state.device);
    const [device, setDevice] = useState(null);
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const options = [
        {
            label: "Select One",
            value: "",
        },
        {
            label: "MAC",
            value: "MAC",
        },
        {
            label: "WINDOWS SERVER",
            value: "WINDOWS_SERVER",
        },
        {
            label: "WINDOWS WORKSTATION",
            value: "WINDOWS_WORKSTATION",
        },
    ];

    useEffect(() => {
       dispatch(getDevice(id));
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();
        const device = {
            'system_name': e.target.elements.system_name.value,
            'type': e.target.elements.type.value,
            'hdd_capacity': e.target.elements.hdd_capacity.value
        }
        await dispatch(addEditDevice(device, id));
        navigate(`/`);
    }

    function handleDeviceTypeChange(e) {
        dispatch(setDeviceType(e.target.value));
    }

    return <div className='device'>
        <h1>{id ? 'Edit Device' : 'Add Device'}</h1>
        <form onSubmit={(e) => handleSubmit(e)} className='device__form' id={`device_form_${id}`}>
            <div className='device__form-item'>
                <label className='device__form-item-label' htmlFor='system_name'>System Name</label>
                <input type='text' name='system_name' defaultValue={state.device.system_name} />
            </div>
            <div className='device__form-item'>
                <label className='device__form-item-label' htmlFor='type'>Type</label>
                <select name='type' value={state.device.type} onChange={(e) => handleDeviceTypeChange(e)}>
                    {options.map((option, key) => (
                        <option key={key} value={option.value}>{option.label}</option>
                    ))}
                </select>
            </div>
            <div className='device__form-item'>
                <label className='device__form-item-label' htmlFor='hdd_capacity'>HDD Capacity</label>
                <input type='text' name='hdd_capacity' defaultValue={state.device.hdd_capacity} />
            </div>
            <div className='device__form-actions'>
                <button className='cta' type='submit'>Save</button>
                <button className='cta secondary_cta' onClick={() => navigate('/')} type='button'>Cancel</button>
            </div>
        </form> 
    </div>;
}

export default Device;