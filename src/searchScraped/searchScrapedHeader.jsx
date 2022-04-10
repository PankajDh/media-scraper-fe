import React from 'react';
import PropTypes from 'prop-types';

import FormField from '../common/formFields/formField';
import { searchScrapedOption } from './constants/searchScraped.types';
import '../styles/style.css';

const SearchScrapedHeader = (props) => {
    // const [searchText, updateSearchText] = useState('');

    const searchClickHanlder = () => {
        props.fetchData();
    };

    const searchTextChangeHandler = (event) => {
        props.updateSearchText(event.target.value);
    };

    const searchTypeChangeHandler = (event) => {
        props.updateSearchType(event.target.value);
    };

    return (
        <div className="searchScrapeHeader">
            <FormField
                type="dropdown"
                value={props.searchType}
                options={searchScrapedOption}
                onChange={searchTypeChangeHandler}
                className="searchScrapeSelect"
            />
            <FormField
                type="text"
                value={props.searchText}
                onChange={searchTextChangeHandler}
                className="searchScrapeText"
                contentClassName="searchScrapeSelect-content"
            />
            <FormField
                type="button"
                value={props.searchText}
                label="Search"
                onClick={searchClickHanlder}
                className="searchScrapeButton"
            />
        </div>
    );
};

SearchScrapedHeader.propTypes = {
    fetchData: PropTypes.func,
    updateSearchType: PropTypes.func,
    updateSearchText: PropTypes.func,
    searchType: PropTypes.string,
    searchText: PropTypes.string,
};

SearchScrapedHeader.defaultProps = {
    fetchData: () => {},
    updateSearchType: () => {},
    updateSearchText: () => {},
    searchType: '',
    searchText: '',
};

export default SearchScrapedHeader;
