/* eslint-disable */
import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import FormField from '../common/formFields/formField';
import { BASE_URL, AUTH_KEY } from '../constants/general';
import debounce from '../common/debouncing';
import '../styles/style.css';

const UrlScrapingStatus = () => {
    const [scrapingUrlWithStatus, updateScrapingUrlWithStatus] = useState({});
    const [currentPage, updateCurrentPage] = useState(0);

    useEffect(() => {
        fetchScrapingUrlsStatus();
    }, [currentPage]);

    const fetchScrapingUrlsStatus = () => {
        const apiEndpoint = `${BASE_URL}/scrape?pageNumber=${currentPage + 1}`;
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
                updateScrapingUrlWithStatus(data);
            });
    };

    const updatePagination = ({ selected }) => {
        updateCurrentPage(selected);
    };

    const debouncedFetch = debounce(fetchScrapingUrlsStatus, 100);

    return (
        <div>
            <FormField
                type="button"
                label="Refresh"
                onClick={debouncedFetch}
                className="refreshBtn"
            />
            <table>
                <thead>
                    <tr>
                        <th>URL</th>
                        <th>Status</th>
                        <th>Retries</th>
                    </tr>
                </thead>
                <tbody>
                    {scrapingUrlWithStatus.data &&
                        scrapingUrlWithStatus.data.map((urlInfo, index) => (
                            <tr key={index}>
                                <td>{urlInfo.url}</td>
                                <td>
                                    {urlInfo.isScraped
                                        ? 'Completed'
                                        : urlInfo.retries > 2
                                        ? 'Error'
                                        : 'Pending'}
                                </td>
                                <td>{urlInfo.retries}</td>
                            </tr>
                        ))}
                </tbody>
            </table>
            <ReactPaginate
                nextLabel="Next >"
                onPageChange={updatePagination}
                pageCount={scrapingUrlWithStatus.totalPages}
                previousLabel="< Previous"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
                renderOnZeroPageCount={null}
            />
        </div>
    );
};
export default UrlScrapingStatus;
