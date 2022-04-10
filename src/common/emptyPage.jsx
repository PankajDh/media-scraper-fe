import React from 'react';
import PropTypes from 'prop-types';

const EmptyPage = (props) => {
    return <h2>{props.emptySearchText}</h2>;
};

EmptyPage.propTypes = {
    emptySearchText: PropTypes.String,
};

EmptyPage.defaultProps = {
    emptySearchText: '',
};

export default EmptyPage;
