import React from 'react';
import PropTypes from 'prop-types';

const Image = (props) => {
    return <img alt="not found" src={props.src} className={props.className} />;
};

Image.propTypes = {
    src: PropTypes.string,
    className: PropTypes.string,
};

Image.defaultProps = {
    src: '',
    className: '',
};

export default Image;
