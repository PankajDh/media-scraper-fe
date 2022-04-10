import React from 'react';
import PropTypes from 'prop-types';

const Dropdown = (props) => {
    return (
        <select {...props}>
            {props.options.map((dropdownOption, index) => (
                <option key={index} value={dropdownOption.value}>
                    {dropdownOption.label}
                </option>
            ))}
        </select>
    );
};

Dropdown.propTypes = {
    options: PropTypes.array,
    className: PropTypes.string,
    label: PropTypes.string,
};

Dropdown.defaultProps = {
    options: [],
    className: '',
    label: '',
};

export default Dropdown;
