import { Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav/Nav';
import Slider from './Components/Slider/Slider';

function App() {
  return (
    <>
      <Nav />
      <Slider />
      <Routes>
      </Routes>
    </>
  );
}

export default App;
