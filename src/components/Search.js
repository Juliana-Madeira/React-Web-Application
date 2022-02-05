import React from "react";
import { Link } from "react-router-dom";
const Search = () => {
    return(
        <div>
        <input type='text' placeholder='Search'/>
        <Link to= {`/search`}><button type="button">Search</button></Link>
        </div>
    )
}
export default Search;