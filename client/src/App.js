import {
  BrowserRouter as Router,
  Route , Switch
} from "react-router-dom";
import axios from 'axios';

import React , { 
  useState 
/*   , useEffect  */
} from 'react';

import "./assets/reset.css";
import "./assets/App.css";

// import Auth from './auth/Auth.js'
import { 
  RouteAuthenticate, 
  RouteProtected 
} from './auth/Route.js';

// import ___ from "./components/___/___.js";
import Header from "./components/Header/Header.js";

// import ___ from "./views/___/___.js";
import HomePage from "./views/HomePage/HomePage.js";
import AuthPage from "./views/AuthPage/AuthPage.js";
import UserPage from "./views/UserPage/UserPage.js";
import ErrorPage from "./views/ErrorPage/ErrorPage.js";



function App() {

  const [ auth , setAuth ] = useState( initAuth );

  /* Get Request - to setup user authentication */
  async function initAuth () {
    try {
    
      const result = await axios.get('/user/check-user');
      console.log('Auth Result:' , result.data)
      setAuth( result.data.auth )
  
    } catch (err) { console.log(err) } 
  }
  
  /* check auth hook */
  // useEffect( () => { 
  //   console.log('App Auth:' , auth) 
  // } , [ auth ])



  return (
    <>
      <Router>
        <Header 
          auth={ auth }
          setAuth={ setAuth } 
        />

        <Switch>
          {/* public home page to all users */}
          <Route exact path="/">
            <HomePage />
          </Route>

          {/* access to sign-up/signin-in */}
          <RouteAuthenticate
            exact
            auth={ auth }
            setAuth={ setAuth }
            path="/user/auth/:entry"
            component={ AuthPage }
          />

          {/* access to user page */}
          <RouteProtected
            auth={ auth }
            path="/user"
            component={ UserPage }
          />

          {/* unknowm route error page */}
          <Route component={ ErrorPage } />
        </Switch>
      </Router>
    </>
  );
}

export default App;
