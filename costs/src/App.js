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
import Container from "./components/layont/Container";
import Navbar from "./components/layont/Navbar";
import Footer from "./components/layont/Footer";
import Projects from "./components/pages/Projects";



function App() {
  return (
    <Router>
      <Navbar/> 
      <Container customClass="min-height">
      <div>
      
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/company" element={<Company />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/newproject" element={<NewProject />} />
          <Route exact path="/projects" element={<Projects />} />      
            </Routes>
      </div>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
