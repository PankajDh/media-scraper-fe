import React from 'react';
import PropTypes from 'prop-types';

const Image = (props) => {
    return <img alt={props.alt} src={props.src} className={props.className} />;
};

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
};

Image.defaultProps = {
    src: '',
    alt: '',
    className: '',
};

export default Image;
