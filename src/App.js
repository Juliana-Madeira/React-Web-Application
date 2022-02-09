import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Cusine from './components/Cusine';



function App() {
 
  return (
    <div className="App">
  <Routes>
  <Route
      path ='/'
      element = {<HomePage/>}
      />
   <Route
      path ='/:country'
      element = {<Cusine/>}
      />
  </Routes>
    </div>
      
  );
}

export default App;
