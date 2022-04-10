import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
const EmptyPage = ({emptySearchText, emptyDataImage}) => {
    return (
        <div>
            {emptySearchText && <h2>{emptySearchText}</h2>}
            {emptyDataImage && <img src={emptyDataImage} alt="not found"/>}
        </div>
    );
};

EmptyPage.propTypes = {
    emptySearchText: PropTypes.string,
};

EmptyPage.defaultProps = {
    emptySearchText: '',
};

export default EmptyPage;
