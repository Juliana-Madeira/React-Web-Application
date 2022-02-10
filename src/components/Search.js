import React from "react";
import { Link } from "react-router-dom";
import './Search.css'

const Search = () => {
    return(
        <div className="search">
        <input type='text' placeholder='Search' className="input"/>
        <Link to= {`/search`}><button type="button" className="button">Search</button></Link>
        </div>
    )
}
export default Search;