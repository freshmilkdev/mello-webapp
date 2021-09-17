import React, {useEffect} from 'react';
import {Header} from "../Shared/Header/Header";
import {RequestPreviewContent} from "./RequestPreviewContent";
import {RequestPreviewCompanies} from "./RequestPreviewCompanies";
import styles from './RequestPreview.module.css';
import {RequestPreviewButtons} from "./RequestPreviewButtons";
import {usePreviewRequest} from "./usePreviewRequest";
import {useHistory} from "react-router-dom";
import {routes} from "../../routes";

export const RequestPreview = () => {
    const {requestData, conversationCreated, onSubmit, onCancel} = usePreviewRequest();
    let history = useHistory();
    useEffect(() => {
        if (!requestData) {
            history.push(routes.home);
        }
    }, []);
    if (!requestData) return null;
    const {message, address, city, companies} = requestData;
    const vendorName = companies.length > 0 ? companies[0].name : '';

    return (
        <div>
            <Header title={'Your Request'} hasBackBtn={false}/>
            <div className={styles.requestPreview}>
                <RequestPreviewContent vendorName={vendorName} address={address} city={city} description={message}/>
                <RequestPreviewCompanies companies={companies}/>
            </div>
            <RequestPreviewButtons onSubmit={onSubmit} onCancel={onCancel} disabled={!companies.length} conversationCreated={conversationCreated}/>
        </div>
    )
}
