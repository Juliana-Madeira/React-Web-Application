import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Footer from "./Footer";
import './Cusine.css'
import ButtonFavorites from "./ButtonFavorites";
import Navbar from './Navbar';



const Category = () => {

    const categoryParams = useParams();
    console.log(categoryParams)

    const [recipes, setRecipes] = useState([]);
    const getRecipes = async () => {
      const { data } = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryParams.category}`
      );
        console.log(data.meals)
      setRecipes(data.meals);
    };
  
    useEffect(() => {
      getRecipes();
    }, [categoryParams]);

 return(
   <div>
       <Navbar/>
     <div className="category-page">
       
    
        <div className="cusine-size">
        <h1 className="cusine-h1">{categoryParams.category}</h1>
        <div className="cusine-row">
          {recipes.map((recipe) => {
            return (
              <div className="button-favorites" key={recipe.idMeal}>
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
            );
          })}
        </div>
      </div>
      
     
     </div>
     <Footer />
   </div>
     
 )
}
export default Category;