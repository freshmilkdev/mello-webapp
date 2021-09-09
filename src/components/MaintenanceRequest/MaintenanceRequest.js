import React from 'react';
import PropTypes from 'prop-types';
import {Header} from "../Shared/Header/Header";
import {Input} from "../Shared/Input/Input";
import {Button} from "../Shared/Button/Button";

export const MaintenanceRequest = ({requestData, onInputChange, onSubmit}) => {
    const {jobType, numberOfRequests, address, city, zipCode, description, photo} = requestData;
    return (
        <div>
            <Header title={'Maintenance Request'}/>
            <form onSubmit={onSubmit}>
                <Input onChange={onInputChange} value={jobType} name='jobType'
                       label='Job Type (ex: handyman, plumber, electrician, AC repair, etc...)' className='mb-1'/>
                <Input max='50' min='0' type='number' onChange={onInputChange} value={numberOfRequests}
                       name='numberOfRequests'
                       label='# of Requests (suggested 20, max 50)'
                       className='mb-1'/>
                <Input onChange={onInputChange} value={address} name='address' label='Address' className='mb-1'/>
                <Input onChange={onInputChange} value={city} name='city' label='City' className='mb-1'/>
                <Input onChange={onInputChange} value={zipCode} name='zipCode' label='Zip Code' className='mb-1'/>
                <Input multiline onChange={onInputChange} value={description} name='description'
                       label='Describe your issue in as much detail as possible:' className='mb-1'/>
                <Input onChange={onInputChange} value={photo} name='photo' type='file'
                       label='Upload a photo of the issue (Optional)' className='mb-3'/>
               <Button label='Send Message' className='mb-3' small fullWidth={false}/>
            </form>
        </div>
    )
}

MaintenanceRequest.propTypes = {
    requestData: PropTypes.object.isRequired,
    onInputChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
}