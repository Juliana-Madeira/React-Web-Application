import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "./Header";
import Search from "./Search";
import Footer from "./Footer";
import "./Cusine.css";

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
      <Header />
      <Search />
      <div className="cusine-size">
        <h1 className="cusine-h1">{countryParams.country}</h1>
        <div className="cusine-row">
          {recipes.map((recipe) => {
            return (
              <div key={recipe.idMeal}>
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
