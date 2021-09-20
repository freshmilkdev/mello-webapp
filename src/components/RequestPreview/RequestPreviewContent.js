import React from 'react';
import styles from './RequestPreview.module.css';
import PropTypes from 'prop-types';
import clsx from "clsx";

export const RequestPreviewContent = ({vendorName, description, address, city}) => {

    return (
        <div className={clsx(styles.content, 'mb-3')}>
            <p>Hello, is this {vendorName}? I got your info off Yelp. {description} I am located at {address} in {city}.</p>
            <p>How much will this job cost, or if an in-person estimate is needed, how much is the estimate visit? When is your next availability?</p>
        </div>
    );
}

RequestPreviewContent.propTypes = {
    vendorName: PropTypes.string.isRequired,
    description: PropTypes.any.isRequired,
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
};