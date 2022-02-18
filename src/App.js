import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Cusine from "./components/Cusine";
import Details from "./components/Details";
import SearchPage from "./components/SearchPage";
import Category from "./components/Category";
import IngredientsPage from "./components/IngredientsPage";
import IngredientsElement from "./components/IngredientsElement";
import Favorites from "./components/Favorites";

function App() {
 
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/country/:country" element={<Cusine />} />
        <Route path="/recipe/:id" element={<Details />} />
        <Route path="/search/:food" element={<SearchPage />} />
        <Route path="/categories/:category" element={<Category/>}/>
        <Route path="/categories/ingredients" element={<IngredientsPage/>}/>
        <Route path="/ingredients/:ingredient" element={<IngredientsElement/>}/>
        <Route path="categories/favorites" element={<Favorites/>}/>
      </Routes>
    </div>
  );
}

export default App;
