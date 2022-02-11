import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import './Search.css';
import axios from 'axios';

const Search = () => {

    const strMealParams = useParams();
  

    const [meals, setMeals] = useState([]);

    const getMeal = async () => {
      const { data } = await axios.get(

        `https://www.themealdb.com/api/json/v1/1/search.php?s=${strMealParams.strMeal}`
      );
      
      setMeals(data.meals);
    };
  
  
    useEffect(() => {
      getMeal();
    }, []);
  

    return(
        <div className="search">
        <input type='text' placeholder='Search by Name of Food' className="input"/>
        <Link to= {`/search`}><button type="button" className="button">Search</button></Link>
        </div>
    )
}
export default Search;