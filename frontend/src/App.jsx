<<<<<<< Updated upstream

import './App.css'

=======
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import Home from "./pages/Home";
>>>>>>> Stashed changes
function App() {

  return (
<<<<<<< Updated upstream
    <>
      <div className='text-blue-200'>Hello</div>
    </>
  )
=======
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />  } />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
>>>>>>> Stashed changes
}

export default App
