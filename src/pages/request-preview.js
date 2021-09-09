import React from 'react';
import {RequestPreview} from "../components/RequestPreview/RequestPreview";

let companies = [];
for (let i = 1; i <= 10; i++) companies.push(`Company ${i}`);

export const RequestPreviewPage = () => {
    const requestData = {
        vendorName: 'Vendor Name',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid debitis delectus eaque esse est neque officiis qui repellat sequi tempora. A, animi cumque enim ex fugit illum labore maiores mollitia?',
        address: 'Address Goes here st. 1', city: 'New York',
        companies: companies
    };
    const handleSubmit = () => console.log('handle send request');

    return <RequestPreview requestData={requestData} onSubmit={handleSubmit}/>
}