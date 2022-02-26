import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Search from "./Search";
import Footer from "./Footer";
import "./Cusine.css";
import ButtonFavorites from "./ButtonFavorites";
import Navbar from './Navbar';

const Cusine = () => {
  const countryParams = useParams();

  const [recipes, setRecipes] = useState([]);
  const getRecipes = async () => {
    const { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${countryParams.country}`
    );

    setRecipes(data.meals);
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div>
      <Navbar/>
      <Search />
      <div className="cusine-size">
        <h1 className="cusine-h1">{countryParams.country}</h1>
        <div className="cusine-row">
          {recipes.map((recipe) => {
            return (
              <div className="wrap-element" key={recipe.idMeal}>
              <div className="button-favorites" >
                <Link className="cusine-link" to={`/recipe/${recipe.idMeal}`}>
                  <div className="cusine-recipe">
                    <figure>
                      <img
                        src={recipe.strMealThumb}
                        className="list-img"
                        alt=""
                      />
                    </figure>
                    <div className="cusine-title">
                      <h3>{recipe.strMeal}</h3>
                    </div>
                  </div>
                </Link>
                <ButtonFavorites id= {recipe.idMeal}/>
              </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Cusine;
