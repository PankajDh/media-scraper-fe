import React, { useState } from 'react';
import { BASE_URL, AUTH_KEY } from '../constants/general';
import FormField from '../common/formFields/formField';
import '../styles/style.css';

const AddUrlToScrape = () => {
    const [urlsToScrape, updateUrlToScrapeValue] = useState('');

    const urlToScrapeChangeHandler = (event) => {
        updateUrlToScrapeValue(event.target.value);
    };

    const addUrlsToScrape = (urlList) => {
        const urls = urlList.split(',');

        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                authorization: AUTH_KEY,
            },
            body: JSON.stringify({
                webUrls: urls,
            }),
        };
        const apiEndPoint = BASE_URL + '/scrape';
        fetch(apiEndPoint, requestOptions)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            });
    };

    const scrapeUrlsClickHandler = () => {
        addUrlsToScrape(urlsToScrape);
        updateUrlToScrapeValue('');
    };

    return (
        <div className="addUrlsToScrape">
            <FormField value={urlsToScrape} onChange={urlToScrapeChangeHandler} />

            <FormField
                type="button"
                label="Scrape URL's"
                onClick={scrapeUrlsClickHandler}
                className="searchScrapeButton"
            />
        </div>
    );
};

export default AddUrlToScrape;
