import './App.css';
import ScrapeUrls from './addToScrape/scrapeUrls';
import SearchScraped from './searchScraped/searchScraped';
import NavBar from './navbar/navbar';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <BrowserRouter>
                    <NavBar />

                    <div className="pages">
                        <Routes>
                            <Route path="/" element={<ScrapeUrls />} />
                            <Route exact path="/scraped" element={<SearchScraped />} />
                        </Routes>
                    </div>
                </BrowserRouter>
            </header>
        </div>
    );
}

export default App;
