import { Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}/> 
      </Routes>
    </>
  );
}

export default App;
