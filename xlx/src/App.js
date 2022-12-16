import Navbar from './Components/Navbar/Navbar';
import './App.css';
import Category from './Components/category/Category';
import Banner from './Components/Banner/Banner';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer'
import Login from './Components/Login/Login'
import Signup from './Components/Signup/Signup';
import AllRoutes from './Components/AllRoutes/AllRoutes';


function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <AllRoutes/>
      <Footer/>
    
      

      

    </div>
  );
}

export default App;
