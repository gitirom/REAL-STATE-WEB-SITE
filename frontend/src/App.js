import Home from './pages/Home';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Profile from './pages/Profile';
import SingIn from './pages/SingIn';
import SingUp from './pages/SingUp';
import PrivateRoute from './components/PrivateRoute';
import Offers from './pages/Offers';
import ForgetPassword from './pages/ForgetPassword';
import Header from './components/Header';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import CreateListing from './pages/CreateListing';

function App() {
  return (
    <>
      <Router>
        <Header  /*put header heir to show it in all the pages*//>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Profile" element={<PrivateRoute />}>                          {/*if the user is sign-in is gone render the profile page  */}
          <Route path="/Profile" element={<Profile/>} />
          </Route>                                                                  
          <Route path="/Sing-In" element={<SingIn/>} />
          <Route path="/Sing-Up" element={<SingUp/>} />
          <Route path="/Offers" element={<Offers/>} />
          <Route path="/ForgetPassword" element={<ForgetPassword/>} />
          <Route path="/create-listing" element={<CreateListing />} />
          
        </Routes>
      </Router>
      <ToastContainer                                                              //React-Toastify allows you to add notifications to your app with ease. No more nonsense!
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        />
        
      

    </>
  );
}

export default App;
