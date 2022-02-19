import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import './Cusine.css'
import Footer from "./Footer";
import ButtonFavorites from "./ButtonFavorites";

const Favorites = () => {
  const keep = JSON.parse(localStorage.getItem("favorites"));
  console.log(keep);

  const [favorites, setFavorites] = useState([]);


  const getRecipe = async (favMeals) => {
    const mealFav = [];

    for (const fav of favMeals) {
      const { data } = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${fav}`
      );
      mealFav.push(data.meals[0]);
    }
    setFavorites(mealFav);
  };

  useEffect(() => {
    getRecipe(keep);
  }, []);

  return (
    <div>
      <Header />
      <div className="cusine-row">
      {favorites.length
        ? favorites.map((favorite) => 
        <div className="button-favorites" key={favorite.idMeal}>
        <Link className="cusine-link" to={`/recipe/${favorite.idMeal}`}>
          <div className="cusine-recipe">
            <figure>
              <img
                src={favorite.strMealThumb}
                className="list-img"
                alt=""
              />
            </figure>
            <div className="cusine-title">
              <h3>{favorite.strMeal}</h3>
            </div> 
          </div>
        </Link>
        <ButtonFavorites id= {favorite.idMeal}/>
      </div>
        ) : ""}
       </div>
       <Footer/>
    </div>
    
  );
};
export default Favorites;
