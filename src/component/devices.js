import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDevices, removeDevice, sortBy } from '../store/actions/devicesAction';
import { useNavigate } from 'react-router-dom'


function Devices() {
    const state = useSelector(state => state.devices);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getDevices());
    }, [dispatch])

    async function handleRemove(id) {
        await dispatch(removeDevice(id));
        dispatch(getDevices());
    };

    async function handleSortBy(e) {
        const sortCriteria = e.target.value;
        if (sortCriteria === '') {
            dispatch(getDevices());
        } else {
            dispatch(sortBy(e.target.value));
        }
    };

    return <div className='devices'>
        <h1>Devices</h1>
        <div className='devices__actions-container'>
            <div className='devices__action-item'>
                <button className='cta' onClick={() => navigate('/device')}>Add Device</button>
            </div>
            <div className='devices__action-item'>
                <label htmlFor='sort_by'>Sort By</label>
                <select name ='sort_by'  defaultValue='' onChange={(e) => handleSortBy(e)}>
                    <option value=''>Select One</option>
                    <option value='HDD CAPACITY Asc'>HDD CAPACITY Asc</option>
                    <option value='HDD CAPACITY Desc'>HDD CAPACITY Desc</option>
                    <option value='TYPE Asc'>TYPE Asc</option>
                    <option value='TYPE Desc'>TYPE Desc</option>
                    <option value='SYSTEM NAME Asc'>SYSTEM NAME Asc</option>
                    <option value='SYSTEM NAME Desc'>SYSTEM NAME Desc</option>
                </select>
            </div>
        </div>
        <div className='devices__column-title'>
            <div className='devices__column-title-item'>SYSTEM NAME</div>
            <div className='devices__column-title-item'>TYPE</div>
            <div className='devices__column-title-item'>HDD CAPACITY</div>
            <div className='devices__column-title-item'>ACTIONS</div>
        </div>
        <div className='devices__device-items'>
            {state.devices.map((device, key) =>
                <div key={key} className='devices__device-item'>
                    <div className='devices__device-item-mobile-label'>SYSTEM NAME</div>
                    <div className='devices__device-item-data'>{device.system_name}</div>
                    <div className='devices__device-item-mobile-label'>Type</div>
                    <div className='devices__device-item-data'>{device.type.replace('_', ' ')}</div>
                    <div className='devices__device-item-mobile-label'>HDD CAPACITY</div>
                    <div className='devices__device-item-data'>{`${device.hdd_capacity} GB`}</div>
                    <div className='devices__device-item-actions'>
                        <button className='devices__device-item-action cta' onClick={() => navigate(`/device/${device.id}`)}>Edit</button>
                        <button className='devices__device-item-action cta secondary_cta' onClick={() => handleRemove(device.id)}>Remove</button>
                    </div>
                </div>
            )}
        </div>
    </div>;
};

export default Devices;