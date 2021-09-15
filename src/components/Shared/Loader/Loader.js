import React from 'react';
import PropTypes from 'prop-types';
import styles from './Loader.module.css';

export const Loader = ({size = 24}) => (<div className={styles.loader} style={{minWidth: size, minHeight: size}}/>);

Loader.propTypes = {
    size: PropTypes.number
};