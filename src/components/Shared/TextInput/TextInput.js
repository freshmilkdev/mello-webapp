import React from 'react';
import PropTypes from 'prop-types';
import styles from './TextInput.module.css';
import clsx from "clsx";

export const TextInput = ({name, value, label, onChange, rounded = false, type = 'text', className = ''}) => {
    return <div className={clsx(styles.inputWrapper, className)}>
        <label htmlFor="">{label}</label>
        <input type={type} name={name} value={value} onChange={onChange} className={clsx(styles.input, {
            [styles.inputRounded]: rounded
        })}/>
    </div>;
};
TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    onChange: PropTypes.func.isRequired,
    rounded: PropTypes.bool,
    type: PropTypes.string,
    className: PropTypes.string,
};