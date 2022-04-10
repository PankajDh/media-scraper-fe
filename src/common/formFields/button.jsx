import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
    return (
        <button onClick={props.onClick} className={props.className}>
            {props.label}
        </button>
    );
};

Button.propTypes = {
    onClick: PropTypes.func,
    className: PropTypes.string,
    label: PropTypes.string,
};

Button.defaultProps = {
    emptySearchText: '',
    className: '',
    label: '',
};

export default Button;
