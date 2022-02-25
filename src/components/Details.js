import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './Details.css';
import Search from "./Search";
import Footer from "./Footer";
import ButtonFavorites from "./ButtonFavorites";
import Navbar from './Navbar';


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
      <Navbar/>
      <Search />
     
      <div className="details">
        <div className="details-pic-name">
          <p>{recipe.strMeal}</p> 
          <div className="heart">
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          
          <ButtonFavorites id={id}/>  
          
          </div>
          
        </div>
     
       
          <div className="details-ingridients">
          <hr className="divider"/>
        
        <p className="title-ingredients">Ingredients</p>
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
         
        <hr className="divider"/>
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


/*import React from "react";
import Printer, { print } from 'react-pdf-print';

const ids = ['1']
      
function Frase (){
    return (
        <div>
            <Printer>
            <div id={ids[0]} style={{ width:'210mm', height: '297mm'}}>
                Hello World!<br/>
                testando<br/>
                a <br/>
                impressao<br/>
                para salvar<br/>
                em pdf;<br/>
            </div>
            </Printer>
            <input type='button' style={{ position: 'relative', float: 'right' }}
            onClick={() => print(ids)} value='Stampa' />
        </div>
    )
}

export default Frase; */