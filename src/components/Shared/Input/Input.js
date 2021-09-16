import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.css';
import clsx from "clsx";

export const Input = ({name, value, label, onChange, rounded = false, type = 'text', className = '', min = 0, max = 20, multiline, required}) => {
    let props = {};
    if(type === 'file') props.accept="image/*";
    return (
        <div className={clsx(styles.inputWrapper, {
            [styles.rounded]: rounded
        }, className)}>
            <label htmlFor="">{label}</label>
            {!multiline ?
                <input required={required} {...props} min={min} max={max} type={type} name={name} value={value} onChange={onChange}
                       className={clsx(styles.input)}/> :
                <textarea required={required} rows={5} name={name} value={value} onChange={onChange}
                          className={clsx(styles.input)}/>}
        </div>
    )
};
Input.propTypes = {
    required: PropTypes.bool,
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func.isRequired,
    rounded: PropTypes.bool,
    type: PropTypes.string,
    className: PropTypes.string,
};