import React from 'react';
import PropTypes from 'prop-types';

const Video = (props) => {
    return (
        <video width="320" height="240" controls className={props.className}>
            <source src={props.source} type={props.type} />
            Your browser does not support the video tag.
        </video>
    );
};

Video.propTypes = {
    source: PropTypes.String,
    className: PropTypes.String,
    type: PropTypes.String,
};

Video.defaultProps = {
    soruce: '',
    className: '',
    type: '',
};

export default Video;
