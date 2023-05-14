import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Login from './components/Login';
import "./Login.css"

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        
        <Routes>
          <Route path="/checkout" element={<><Header/><Checkout/></>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/" element={<><Header/><Home/></>} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
