import Search from "./Search";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

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
      <Header />
      <div>
        <Search />
      </div>
      <div className="cusine-row">
        {recipes
          ? recipes.map((recipe) => {
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
                      <h3>{recipe.strMeal}</h3>
                    </div>
                  </Link>
                </div>
              );
            })
          : "No Results."}
      </div>
      <Footer />
    </div>
  );
};
export default SearchPage;
