import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Landing from './components/landing/Landing';

function App() {
  return(
  <BrowserRouter>
  <Navbar></Navbar>
  <Landing></Landing>
    <Routes>
      {/* <Route path='/' element={<Home/>}/> */}
    </Routes>
  </BrowserRouter>)
}

export default App;
