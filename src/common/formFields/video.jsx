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
    source: PropTypes.string,
    className: PropTypes.string,
    type: PropTypes.string,
};

Video.defaultProps = {
    soruce: '',
    className: '',
    type: '',
};

export default Video;
