import { Routes, Route } from 'react-router-dom';
import './App.css';
// import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <>
      {/* <Nav /> */}
      <Routes>
        <Route path='/' element={<Home />}/> 
        <Route path='/login' element={<Login />}/> 
        <Route path='/signup' element={<SignUp />}/> 
      </Routes>
    </>
  );
}

export default App;
