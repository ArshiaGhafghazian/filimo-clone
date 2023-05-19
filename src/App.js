import { Routes, Route } from 'react-router-dom';
import './App.css';
// import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';

function App() {
  return (
    <>
      {/* <Nav /> */}
      <Routes>
        <Route path='/' element={<Home />}/> 
        <Route path='/login' element={<Login />}/> 
      </Routes>
    </>
  );
}

export default App;
