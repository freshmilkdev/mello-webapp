import React from 'react';
import PropTypes from 'prop-types';
import styles from './Select.module.css';
import clsx from "clsx";

export const Select = ({name, value, label, onChange, className = '', options}) => {
    return (
        <div className={clsx(styles.selectWrapper, className)}>
            <label htmlFor="">{label}</label>
            <select name={name} value={value} onChange={onChange}
                    className={clsx(styles.select)}>
                {(options || []).map(({id, name}, ix) =>
                    <option key={`${name}${ix}`} value={id}>{name}</option>)}
            </select>
        </div>
    )
};
Select.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired,
    className: PropTypes.string,
};