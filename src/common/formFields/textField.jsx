import React from 'react';
import PropTypes from 'prop-types';

const TextField = (props) => {
    return <input {...props} />;
};

TextField.propTypes = {
    onChange: PropTypes.func,
    className: PropTypes.string,
};

TextField.defaultProps = {
    onChange: () => {},
    className: '',
};

export default TextField;
