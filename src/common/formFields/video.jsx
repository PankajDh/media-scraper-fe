import React from 'react';
import PropTypes from 'prop-types';

const Video = (props) => {
    return (
        <video width="320" height="240" controls className={props.className}>
            <source src={props.src} alt={props.alt}/>
            Your browser does not support the video tag.
        </video>
    );
};

Video.propTypes = {
    src: PropTypes.string,
    className: PropTypes.string,
    type: PropTypes.string,
    alt: PropTypes.string
};

Video.defaultProps = {
    src: '',
    className: '',
    type: '',
    alt:''
};

export default Video;
