import React from 'react';
import PropTypes from 'prop-types';

import ScrapedDataView from './scrapedDataView';
import EmptyPage from '../common/emptyPage';

const SearchScrapedBody = (props) => {
    if (!props.scrapedData || !props.scrapedData.data)
        return <EmptyPage emptySearchText={'No data for Searched text'} />;
    if (props.scrapedData.data) return <ScrapedDataView {...props} />;
};

SearchScrapedBody.propTypes = {
    scrapedData: PropTypes.object,
};

SearchScrapedBody.defaultProps = {
    scrapedData: {},
};

export default SearchScrapedBody;
