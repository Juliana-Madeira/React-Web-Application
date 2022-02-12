import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Cusine from "./components/Cusine";
import Details from "./components/Details";
import SearchPage from "./components/SearchPage";
import Category from "./components/Category";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/country/:country" element={<Cusine />} />
        <Route path="/recipe/:id" element={<Details />} />
        <Route path="/search/:food" element={<SearchPage />} />
        <Route path="/categories/:category" element={<Category/>}/>
      </Routes>
    </div>
  );
}

export default App;
