import React from 'react';
import PropTypes from 'prop-types';
import clsx from "clsx";
import styles from './Button.module.css';

export const Button = ({label, color = 'primary', rounded = false, outlined = false, onClick}) => {
    let props = {};
    if (onClick) props.onClick = onClick;
    return <button {...props} className={clsx(styles.button, {
        [styles.rounded]: rounded,
        [styles.outlined]: outlined,
    })}>{label}</button>
}

Button.propTypes = {
    label: PropTypes.string.isRequired,
    color: PropTypes.string,
    rounded: PropTypes.bool,
    outlined: PropTypes.bool,
    onClick: PropTypes.func
};