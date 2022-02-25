import Header from './Header';
import Search from './Search';
import Home from './Home';
import Footer from './Footer';
import Navbar from './Navbar';



const HomePage = () =>{
 
  return (
    <div className="App">
    <Navbar/>
    <Search/>
    <Home/>
    <Footer/>
    </div>
      
  );
}
export default HomePage;