import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Company from "./components/pages/Company";
import NewProject from "./components/pages/NewProject";
import Navbar from "./components/layont/Navbar";
import Footer from "./components/layont/Footer";
import Projects from "./components/pages/Projects";
import Project from "./components/pages/Project";



function App() {
  return (
    <Router>
      <Navbar/> 
      <div>
      
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route  path="/company" element={<Company />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newproject" element={<NewProject />} />
          <Route path="/projects" element={<Projects />} />      
          <Route path="/project/:id" element={<Project/>} />    
            </Routes>
      </div>
      <Footer/>

    </Router>
    
  );
}

export default App;
