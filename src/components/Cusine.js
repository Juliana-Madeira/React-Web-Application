import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "./Header";
import Search from "./Search";
const Cusine = () => {
  const params = useParams();
  console.log(params)

  const [recipes, setRecipes] = useState([]);
  const getRecipes = async () => {
    const { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${params.country}`
    );
    setRecipes(data.meals);
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div>
    <Header/>
    <Search/>
      {recipes.map((recipe) => {
        return (
          <Link to={`/${params.country}/${recipe.idMeal}`} key={recipe.idMeal}>
            <div>
              <figure>
                <img src={recipe.strMealThumb} className="list-img" alt="" />
              </figure>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export default Cusine;
