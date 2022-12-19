import Navbar from './Components/Navbar';
import './App.css';
import Category from './Components/Category';
import Banner from './Components/Banner';
import Home from './pages/Home';
import Footer from './Components/Footer'
import Login from './pages/Login'
import Signup from './pages/Signup';
import AllRoutes from './Components/AllRoutes';
import Singleproduct from './Components/Singleproduct';
import Products from './Components/Products';


function App() {

  
  return (
    <div className="App">
      
      <Navbar/>
      {/* <Signup/> */}
      {/* <Singleproduct/> */}
      {/* <Products/> */}
      <Home/>
      <AllRoutes/>
      <Footer/>
    
      

      

    </div>
  );
}

export default App;
