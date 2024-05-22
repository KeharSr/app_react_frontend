
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
// import Homepage from './pages/homepage/Homepage';

//Toast Config
  import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import Admin_Dashboard from './pages/admin/dashboard/Admin_Dashboard';
  


function App() {
  return(
    <Router>
      <Navbar/>
      <ToastContainer/>
      <Routes>
      <Route path ='/'element={<Homepage/>}/>
        <Route path ='/register'element={<Register/>}/>
        <Route path ='/login'element={<Login/>}/>
        <Route path ="/admin/dashboard"element={<Admin_Dashboard/>}/>
      </Routes>
    </Router>
  );
}

export default App;
