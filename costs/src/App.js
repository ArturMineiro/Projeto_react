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
import Container from "./layont/Container";

function App() {
  return (
    <Router>
      <Container customClass="min-height">
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/company">Compania</Link></li>
          <li><Link to="/contact">Contato</Link></li>
          <li><Link to="/newproject">Novo projeto</Link></li>
        </ul>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/company" element={<Company />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/newproject" element={<NewProject />} />
        </Routes>
      </div>
      </Container>
    </Router>
  );
}

export default App;
