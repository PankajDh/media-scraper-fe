import React from 'react';
import PropTypes from 'prop-types';

import ScrapedDataView from './scrapedDataView';
import EmptyPage from '../common/emptyPage';
import {EMPTY_IMAGE_URL} from './constants/resources';

const SearchScrapedBody = (props) => {
    const isDataPresent = props?.scrapedData?.data?.length > 0;
    if (isDataPresent) {
        return <ScrapedDataView {...props} />;
    }
    return <EmptyPage emptyDataImage={EMPTY_IMAGE_URL} />;
};

SearchScrapedBody.propTypes = {
    scrapedData: PropTypes.object,
};

SearchScrapedBody.defaultProps = {
    scrapedData: {},
};

export default SearchScrapedBody;
