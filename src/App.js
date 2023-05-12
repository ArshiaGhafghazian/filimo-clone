import { Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav/Nav';
import Slider from './Components/Slider/Slider';
import Best from './Components/Best/Best';

function App() {
  return (
    <>
      <Nav />
      <Slider />
      <Best />
      <Routes>
      </Routes>
    </>
  );
}

export default App;
