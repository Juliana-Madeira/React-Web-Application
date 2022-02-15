import Ingredients from "./Ingredients";
import Header from './Header';
import Search from './Search';
import Footer from './Footer';

const IngredientsPage = () => {
    return (
        <div className="ingredients-page">
        <Header/>
        <Search/>
        <Ingredients/>
        <Footer/>
        </div>
          
      );
}
export default IngredientsPage;