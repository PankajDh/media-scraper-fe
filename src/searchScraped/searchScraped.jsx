/* eslint-disable */

import React, { useState, useEffect } from 'react';
import { BASE_URL, AUTH_KEY } from '../constants/general';
import SearchScrapedBody from './searchScrapedBody';
import SearchScrapedHeader from './searchScrapedHeader';

const SearchScraped = () => {
    const [scrapedData, updateScrapedData] = useState({});
    const [searchType, updateSearchType] = useState('all');
    const [searched, isSearched] = useState(false);
    const [currentPage, updateCurrentPage] = useState(0);

    useEffect(() => {
        fetchData();
    }, [currentPage, searchType]);

    const updateCurrentPageAndFetch = (currentPage = 0) => {
        updateCurrentPage(currentPage);
    };

    const updateSearchTypeAndFetch = (searchType) => {
        updateSearchType(searchType);
    };

    const fetchData = () => {
        const apiEndpoint = `${BASE_URL}/assets?type=${searchType}&pageNumber=${
            currentPage + 1
        }`;
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                authorization: AUTH_KEY,
            },
        };
        fetch(apiEndpoint, requestOptions)
            .then((res) => res.json())
            .then((data) => {
                updateScrapedData(data);
            });
        isSearched(true);
    };

    return (
        <div>
            <SearchScrapedHeader
                searchType={searchType}
                updateScrapedData={updateScrapedData}
                updateSearchType={updateSearchType}
                isSearched={isSearched}
                fetchData={fetchData}
            />
            {searched && (
                <SearchScrapedBody
                    updateCurrentPageAndFetch={updateCurrentPageAndFetch}
                    searchType={searchType}
                    scrapedData={scrapedData}
                />
            )}
        </div>
    );
};

export default SearchScraped;
