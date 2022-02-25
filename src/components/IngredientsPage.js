import Ingredients from "./Ingredients";
import Search from './Search';
import Footer from './Footer';
import Navbar from './Navbar';

const IngredientsPage = () => {
    return (
        <div className="ingredients-page">
        <Navbar/>
        <Search/>
        <Ingredients/>
        <Footer/>
        </div>
          
      );
}
export default IngredientsPage;