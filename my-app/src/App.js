import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom";
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import HomePage from './Pages/HomePage';



function App() {
  return (
   
  <Routes>
    <Route path='/' element={<HomePage/>}  />
    <Route path='/login' element={<Login/>}  />
    <Route path='/signup' element={<SignUp/>}  />

  </Routes>
    
  );
}

export default App;
