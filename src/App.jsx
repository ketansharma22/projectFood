import "./App.css";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from './pages/About'
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Dashboard from "./pages/Dashboard";
import Restraunts from "./pages/Restraunts";
import { useAuth } from "./context/AuthContext";
function App() {
  const navigate=useNavigate()
  const auth=useAuth()
  console.log(auth.isLoggedIn, auth.user)
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/menu" element={<Menu/>} />
    
        { 
          auth.isLoggedIn && auth.user &&(
          <Route path="/dashboard" element={<Dashboard/>} />
        )
        }
       
        <Route path="/restraunts" element={<Restraunts/>} />
      </Routes>
    </div>
  );
}

export default App;
