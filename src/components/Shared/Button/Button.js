import React from 'react';
import PropTypes from 'prop-types';
import clsx from "clsx";
import {Link} from "react-router-dom";
import styles from './Button.module.css';

export const Button = ({label, linkTo = '', color = 'primary', rounded = false, outlined = false, onClick, className = ''}) => {
    let props = {};
    if (onClick) props.onClick = onClick;
    if(linkTo) props.to = linkTo;

    const TagComponent = linkTo ? Link : 'button';

    return <TagComponent {...props} className={clsx(styles.button, className, {
        [styles.rounded]: rounded,
        [styles.outlined]: outlined,
    })}>{label}</TagComponent>
}

Button.propTypes = {
    label: PropTypes.string.isRequired,
    color: PropTypes.string,
    rounded: PropTypes.bool,
    outlined: PropTypes.bool,
    onClick: PropTypes.func
};