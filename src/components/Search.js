import {useState} from "react";
import { Link } from "react-router-dom";
import "./Search.css";

const Search = () => {
  const [value, setValue] = useState("");

  return (
    <form className="search">
      <input
        type="text"
        placeholder="Search by Name of Food"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        className="input"
      />
      <Link to={`/search/${value}`}>
        <button 
        type="button" 
        className="button">
          Search
        </button>
      </Link>
    </form>
  );
};
export default Search;
