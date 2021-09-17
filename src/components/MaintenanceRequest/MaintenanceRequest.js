import React from 'react';
import {Header} from "../Shared/Header/Header";
import {Input} from "../Shared/Input/Input";
import {Button} from "../Shared/Button/Button";
import {useMaintenanceRequest} from "./useMaintenanceRequest";

export const MaintenanceRequest = () => {
    const {requestData, onSubmit, onInputChange} = useMaintenanceRequest();
    const {jobType, numRequests, address, city, zipCode, message, photo} = requestData;
    return (
        <div>
            <Header title={'Maintenance Request'}/>
            <form onSubmit={onSubmit}>
                <Input required onChange={onInputChange} value={jobType} name='jobType'
                       label='Job Type (ex: handyman, plumber, electrician, AC repair, etc...)' className='mb-1'/>
                <Input max='50' min='1' type='number' onChange={onInputChange} value={numRequests}
                       name='numRequests'
                       label='# of Requests (suggested 20, max 50)'
                       className='mb-1'/>
                <Input required onChange={onInputChange} value={address} name='address' label='Address'
                       className='mb-1'/>
                <Input required onChange={onInputChange} value={city} name='city' label='City' className='mb-1'/>
                <Input required onChange={onInputChange} value={zipCode} name='zipCode' label='Zip Code'
                       className='mb-1'/>
                <Input required multiline onChange={onInputChange} value={message} name='message'
                       label='Describe your issue in as much detail as possible:' className='mb-1'/>
                <Input onChange={onInputChange} value={photo} name='photo' type='file'
                       label='Upload a photo of the issue (Optional)' className='mb-3'/>
                <Button label='Send Message' className='mb-3' small fullWidth={false}/>
            </form>
        </div>
    )
}
