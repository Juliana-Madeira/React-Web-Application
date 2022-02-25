import Ingredients from "./Ingredients";
import Search from './Search';
import Footer from './Footer';
import Navbar from './Navbar';
import "./Ingredients.css"

const IngredientsPage = () => {
    return (
      <div>
        <Navbar/>
        <Search/>
         <div className="ingredients-page">
        
       
        <Ingredients/>
        
        </div>
        <Footer/>
      </div>
       
          
      );
}
export default IngredientsPage;