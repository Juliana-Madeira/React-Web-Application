import Search from "./Search";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "./Footer";
import Navbar from './Navbar';
import './Cusine.css'

const SearchPage = () => {
  
  const [recipes, setRecipes] = useState([]);
 const {food} = useParams(); 

  const getMeal = async () => {
    const { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`
    );

    setRecipes(data.meals);
  };

  useEffect(() => {
    getMeal();
  }, [food]);


  return (
    <div>
      <Navbar/>
      <div>
        <Search />
      </div>
      <div className="cusine-size">
      <div className="cusine-row">
        {recipes
          ? recipes.map((recipe) => {
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
                      <h3>{recipe.strMeal}</h3>
                    </div>
                  </Link>
                  </div>
                </div>
              );
            })
          : "No Results."}
      </div>
      </div>
     
      <Footer />
    </div>
  );
};
export default SearchPage;
