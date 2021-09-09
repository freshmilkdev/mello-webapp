import React from 'react';
import PropTypes from 'prop-types';

export const Typography = ({variant = 'h1', children, className = ''}) => {
    const TagComponent = variant;
    return <TagComponent className={className}>{children}</TagComponent>
}

Typography.propTypes = {
    variant: PropTypes.string,
    children: PropTypes.any.isRequired,
    className: PropTypes.string,
}