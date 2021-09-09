import React from 'react';
import PropTypes from 'prop-types';
import {Header} from "../Shared/Header/Header";
import {RequestPreviewContent} from "./RequestPreviewContent";
import {RequestPreviewCompanies} from "./RequestPreviewCompanies";
import styles from './RequestPreview.module.css';
import {RequestPreviewButtons} from "./RequestPreviewButtons";

export const RequestPreview = ({requestData, onSubmit, onCancel}) => {
    const {vendorName, description, address, city, companies} = requestData;
    return (
        <div>
            <Header title={'Your Request'} hasBackBtn={false}/>
            <div className={styles.requestPreview}>
                <RequestPreviewContent vendorName={vendorName} address={address} city={city} description={description}/>
                <RequestPreviewCompanies companies={companies} />
            </div>
            <RequestPreviewButtons onSubmit={onSubmit} onCancel={onCancel} />
        </div>
    )
}

RequestPreview.propTypes = {
    requestData: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onCancel: PropTypes.func.isRequired
}