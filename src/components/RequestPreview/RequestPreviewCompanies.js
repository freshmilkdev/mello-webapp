import React from 'react';
import PropTypes from 'prop-types';
import styles from './RequestPreview.module.css';
import clsx from "clsx";

export const RequestPreviewCompanies = ({companies}) =>
    (<div className={clsx(styles.companies, 'mb-3')}>
        <p className={'mb-2'}>Your request will be sent to the following companies:</p>
        <div>{(companies || []).map(company => company.name).join(', ')}</div>
    </div>);

RequestPreviewCompanies.propTypes = {
    companies: PropTypes.array.isRequired
};