import React from 'react';

import { Link } from 'react-router-dom';
import '../styles/style.css';

const NavBar = () => {
    return (
        <div className="navbar">
            <li>
                <Link to="/">Add Urls to Scrape</Link>
            </li>
            <li>
                <Link to="/scraped">View Scraped data</Link>
            </li>
        </div>
    );
};

export default NavBar;
