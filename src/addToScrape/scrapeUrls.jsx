import React from 'react';
import AddUrlToScrape from './addUrlToScrape';
import UrlScrapingStatus from './urlScrapingStatus';

const ScrapeUrls = () => {
    return (
        <div>
            <AddUrlToScrape />
            <UrlScrapingStatus />
        </div>
    );
};

export default ScrapeUrls;
