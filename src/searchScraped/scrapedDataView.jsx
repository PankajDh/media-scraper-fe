import React from 'react';
import PropTypes from 'prop-types';

import FormField from '../common/formFields/formField';
import ReactPaginate from 'react-paginate';
import '../styles/style.css';

const ScrapedDataView = (props) => {
    const updatePagination = ({ selected }) => {
        props.updateCurrentPageAndFetch(selected);
    };
    return (
        <div>
            <div className="scrapedData">
                {props.scrapedData.data.map((item, index) => (
                    <FormField
                        className="scrapedItem"
                        type={item.type}
                        src={item.url}
                        alt={item.alt}
                        key={index}
                    />
                ))}
            </div>
            <ReactPaginate
                nextLabel="Next >"
                onPageChange={updatePagination}
                pageCount={props.scrapedData.totalPage}
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

ScrapedDataView.propTypes = {
    currentPage: PropTypes.number,
    searchType: PropTypes.string,
    updateCurrentPageAndFetch: PropTypes.func,
    scrapedData: PropTypes.object,
    data: PropTypes.object,
    pageCount: PropTypes.number,
};

ScrapedDataView.defaultProps = {
    currentPage: 1,
    searchType: '',
    updateCurrentPageAndFetch: () => {},
    scrapedData: {},
    data: {},
    pageCount: 0,
};

export default ScrapedDataView;
