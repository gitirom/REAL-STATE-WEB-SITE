import Home from './pages/Home';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Profile from './pages/Profile';
import SingIn from './pages/SingIn';
import SingUp from './pages/SingUp';
import Offers from './pages/Offers';
import ForgetPassword from './pages/ForgetPassword';
import Header from './components/Header';

function App() {
  return (
    <>
      <Router>
        <Header  /*put header hier to show it in all the pages*//>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Profile" element={<Profile/>} />
          <Route path="/Sing-In" element={<SingIn/>} />
          <Route path="/Sing-Up" element={<SingUp/>} />
          <Route path="/Offers" element={<Offers/>} />
          <Route path="/ForgetPassword" element={<ForgetPassword/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
