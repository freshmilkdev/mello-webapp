import React from 'react';
import PropTypes from 'prop-types';
import {Header} from "../Shared/Header/Header";
import {Button} from "../Shared/Button/Button";
import {RequestPreviewContent} from "./RequestPreviewContent";
import {RequestPreviewCompanies} from "./RequestPreviewCompanies";
import styles from './RequestPreview.module.css';
import clsx from "clsx";

export const RequestPreview = ({requestData}) => {
    const {vendorName, description, address, city, companies} = requestData;
    return (
        <div>
            <Header title={'Your Request'} hasBackBtn={false}/>
            <div className={styles.requestPreview}>
                <RequestPreviewContent vendorName={vendorName} address={address} city={city} description={description}/>
                <RequestPreviewCompanies companies={companies} />
            </div>
            <div>
                <h4 className={'mb-3 textCenter'}>Are you ready to send your request?</h4>
                <div className={clsx('flexCenter', styles.buttons)}>
                    <Button label={'Cancel'} color={"secondary"} fullWidth={false} small/>
                    <Button label={'Send'} fullWidth={false} small/>
                </div>
            </div>
        </div>
    )
}

RequestPreview.propTypes = {
    requestData: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired
}