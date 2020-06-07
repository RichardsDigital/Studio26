import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

// Styles
import './styles/desktop.css';

function App() {
  return (
    <Router>
      <Nav />

      <div className="background">

        <div className="innerBody">

          <Switch>
            <Route path="/" exact component={Home}/>
          </Switch>

          <Switch>
            <Route path="/about" exact component={About}/>
          </Switch>

          <Switch>
            <Route path="/services" exact component={Services}/>
          </Switch>

          <Switch>
            <Route path="/blog" exact component={Blog}/>
          </Switch>
          
          <Switch>
            <Route path="/Contact" exact component={Contact}/>
          </Switch>

        </div>
        
      </div>

      <Footer />

    </Router>
  );
}

export default App;
