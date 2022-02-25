import Header from './Header';
import Search from './Search';
import Home from './Home';
import Footer from './Footer';
import Navbar from './Navbar';



const HomePage = () =>{
 
  return (
    <div>
       <Navbar/>
       <Search/>
      <div className="App">
   
   
    <Home/>
    
    </div>
    <Footer/>
    </div>
    
      
  );
}
export default HomePage;