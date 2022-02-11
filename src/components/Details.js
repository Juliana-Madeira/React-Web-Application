import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './Details.css';
import Header from "./Header";
import Search from "./Search";
import Footer from "./Footer";
const Details = () => {

  const { id } = useParams();


  const [recipe, setRecipe] = useState([]);
  const getRecipe = async () => {
    console.log(id);
    const { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    console.log(data.meals[0]);
    setRecipe(data.meals[0]);
  };


  useEffect(() => {
    getRecipe();
  }, []);

  return (
    <div>
      <Header />
      <Search />
      <div className="details">
      <div className="details-pic-name">
        {recipe.strMeal}
        <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      </div>
      <div className="details-ingridients-instructions">
        <p>{recipe.strMeasure1} {recipe.strIngredient1}</p>
        <p>{recipe.strMeasure2} {recipe.strIngredient2}</p>
        <p>{recipe.strMeasure3} {recipe.strIngredient3}</p>
        <p>{recipe.strMeasure4} {recipe.strIngredient4}</p>
        <p>{recipe.strMeasure5} {recipe.strIngredient5}</p>
        <p>{recipe.strMeasure6} {recipe.strIngredient6}</p>
        <p>{recipe.strMeasure7} {recipe.strIngredient7}</p>
        <p>{recipe.strMeasure8} {recipe.strIngredient8}</p>
        <p>{recipe.strMeasure9} {recipe.strIngredient9}</p>
        <p>{recipe.strMeasure10} {recipe.strIngredient10}</p>
        <p>{recipe.strMeasure11} {recipe.strIngredient11}</p>
        <p>{recipe.strMeasure12} {recipe.strIngredient12}</p>
        <p>{recipe.strMeasure13} {recipe.strIngredient13}</p>
        <p>{recipe.strMeasure14} {recipe.strIngredient14}</p>
        <p>{recipe.strMeasure15} {recipe.strIngredient15}</p>
        <p>{recipe.strMeasure16} {recipe.strIngredient16}</p>
        <p>{recipe.strMeasure17} {recipe.strIngredient17}</p>
        <p>{recipe.strMeasure18} {recipe.strIngredient18}</p>
        <p>{recipe.strMeasure19} {recipe.strIngredient19}</p>
        <p>{recipe.strMeasure20} {recipe.strIngredient20}</p>
        <p>{recipe.strInstructions}</p>
      </div>
      </div>
      <Footer/> 
      
    </div>
  )

}
export default Details;