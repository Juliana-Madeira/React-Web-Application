import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Cusine from './components/Cusine';
import Details from './components/Details';



function App() {
 
  return (
    <div className="App">
  <Routes>
  <Route
      path ='/'
      element = {<HomePage/>}
      />
   <Route
      path ='/country/:country'
      element = {<Cusine/>}
      />

  <Route
      path ='/recipe/:id'
      element = {<Details/>}
      /> 
  </Routes>
    </div>
      
  );
}

export default App;
