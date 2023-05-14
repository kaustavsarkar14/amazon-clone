import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Login from './components/Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function App() {
  const [{ user }, dispatch] = useStateValue()
  useEffect(() => {
    const unsubsscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      }
      else {
        dispatch({
          type: "SET_USER",
          user: null
        })

      }
    })
    return () => {
      unsubsscribe()
    }
  }, [])
console.log("the user is ",user)

  return (
    <BrowserRouter>
      <div className="app">

        <Routes>
          <Route path="/checkout" element={<><Header /><Checkout /></>} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<><Header /><Home /></>} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
