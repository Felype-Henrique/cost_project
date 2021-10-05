import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './Components/pages/Home';
import Company from './Components/pages/Company';
import Contact from './Components/pages/Contact';
import NemProject from './Components/pages/NewProject';

import Container from './Components/layout/Container';


function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/company">Company</Link>
        <Link to="/newproject">NewProject</Link>
      </div>
      <Switch>
        <Container customClass="min-height">
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/company">
          <Company />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/newproject">
          <NemProject />
        </Route>
        </Container>
      </Switch>
      <p>Footer</p>
    </Router>
  )
}

export default App;
