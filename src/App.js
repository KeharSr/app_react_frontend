
import './App.css';
import Homepage from './pages/homepage/Homepage';
import{
  BrowserRouter as Router,
  Routes,
  Route
  
}from 'react-router-dom';
import Login from './pages/login/Login';
import Navbar from './components/Navbar';
import Register from './pages/register/Register';


function App() {
  return(
    <Router>
      <Navbar/>
      <Routes>
      <Route path ='/'element={<Homepage/>}/>
        <Route path ='/register'element={<Register/>}/>
        <Route path ='/login'element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;
