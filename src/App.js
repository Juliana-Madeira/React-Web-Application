import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import Home from './components/Home';


function App() {
  const [recipes, setRecipes] = useState([]);
  const getRecipes = async () => { 
    const {data} = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
    setRecipes(data);
  }

  useEffect(() => {
    getRecipes();
  }, []);
  
  console.log(recipes);

  if (!recipes){
    return ''}
  
  //let recipeTest = recipes.meals.map(recipe => console.log(recipe.strIngredient))

  return (
    <div className="App">
    <Header/>
    <Search/>
    <Home/>
    
  
    </div>
      
  );
}

export default App;
