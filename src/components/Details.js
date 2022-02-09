import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Details = () => {

    const {id} = useParams();
    
  
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
  
    return(
        <div>
        {recipe.strMeal}
        </div>
    )

}
export default Details;