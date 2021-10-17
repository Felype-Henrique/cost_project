import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Components/pages/Home';
import Company from './Components/pages/Company';
import Contact from './Components/pages/Contact';
import NemProject from './Components/pages/NewProject';
import Projects from './Components/pages/Projects';

import Container from './Components/layout/Container';
import Navbar from './Components/layout/Navbar'
import Footer from './Components/layout/Footer'
import Project from './Components/pages/Project';


function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Container customClass="min-height">
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/company">
          <Company />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/newproject">
          <NemProject />
        </Route>
        <Route path="/project/:id">
          <Project />
        </Route>
        </Container>
      </Switch>
      <Footer/>
    </Router>
  )
}

export default App;
