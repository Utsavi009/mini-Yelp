import React from 'react';
import SearchBar from './searchbar';
import Results from './Results';
import logobug from "../art/logo/logo_long_v01.svg";
import "../App.css";

const SearchResults = () => {


    return (
        <>
            <div className="topnav">
                <div className="topnavspacer">
                    <img src={logobug} width="200" alt="logo icon" />
                </div>
                <div className="topnavspacer">
                    <SearchBar />
                </div>
            </div>

            <Results />



        </>

    )

}

export default SearchResults;