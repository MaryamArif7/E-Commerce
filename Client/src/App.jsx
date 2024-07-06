import {BrowserRouter as Router ,Routes,Route} from "react-router-dom";
import Navbar  from "./components/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Signup from "./pages/Signup/Signup";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login"
import Footer  from "./components/Footer";
function App() {
 return (
    <>
  <Router>
  <Navbar />

  <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
  <Footer />
  </Router>
       
    </>
  )
}

export default App
