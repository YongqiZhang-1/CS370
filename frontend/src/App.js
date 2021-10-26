import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Popular from './components/pages/Popular'
import Gallary from './components/pages/Gallary'
import UserPage from './components/pages/UserPage'
import UserProfile from './components/pages/UserProfile'
import CreateYourOwnRecipe from './components/pages/CreateYourOwnRecipe';
import SignUp from './components/pages/SignUp'
import Login from './components/pages/Login';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Popular' exact component={Popular} />
          <Route path='/Gallary' exact component={Gallary} />
          <Route path='/UserPage' exact component={UserPage} />
          <Route path='/UserProfile' exact component={UserProfile} />
          <Route path='/CreateYourOwnRecipe' exact component={CreateYourOwnRecipe}/>
          <Route path='/SignUp' exact component={SignUp} />
          <Route path='/Login' exact component={Login} />
        </Switch>
      </Router>
    </>
  );
}

export default App;