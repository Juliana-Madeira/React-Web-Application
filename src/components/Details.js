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
  const [favorite, setFavorite] = useState(false);
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
    checkFavorite();
  }, []);

  const favorites = []
  const addFavorite = () =>{
    localStorage.setItem('favorites', JSON.stringify([id]));
    checkFavorite();
   
  }

  const checkFavorite = () => {
    const keep = JSON.parse(localStorage.getItem('favorites'));
    console.log(keep)
    if(!favorites.includes(id)){
      favorites.push(id);
    }
    console.log(favorites);
    setFavorite(keep === id);
  }


  return (
    <div>
      <Header />
      <Search />
      <div>
        <button onClick={addFavorite}>favoritar</button>
        {favorite ? <p>adicionado</p> : <p>não adicionado</p>}
      </div>
      <div className="details">
        <div className="details-pic-name">
          <p>{recipe.strMeal}</p> 
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
        </div>
        <hr style={{width: "800px"}}/>
        <div >
          <p className="title-ingredients">Ingredients</p>
          <div className="details-ingridients">
            <div className="ingredients">
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
            </div>
            <div className="ingredients">    
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
            </div>
          </div>
        <hr style={{width: "800px"}}/>
        <p className="title-ingredients">Instructions</p>
        <div className="details-ingridients-instructions">
          <p>{recipe.strInstructions}</p>
        </div>
      </div>
      </div>
    
      <Footer/> 
      
    </div>
  )

}
export default Details;