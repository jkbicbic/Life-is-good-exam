import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Home from './components/home/home';
import Other from './components/other-page/other-page';

function App() {

  return (
    <Router>
      <div className="main">
        <NavBar/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/other' component={Other} />
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
