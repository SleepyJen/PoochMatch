import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import axios from 'axios';

import React, {
  useState, useEffect
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
// import ErrorPage from "./views/ErrorPage/ErrorPage.js";
import MatchProfile from './views/MatchProfile/MatchProfile';


function App() {

  const [auth, setAuth] = useState('');
  const [id, setId] = useState('');
  const query = `?user_id=${id}`;

  /* GET Request - check for user */
  async function initState() {
    try {

      const result = await axios.get('/user/check-user');
      console.log('App Result:', result.data)
      setAuth(result.data.auth)
      setId((result.data.user) ? result.data.user._id : '')

    } catch (err) { console.log(err) }
  };

  /* check fn hook */
  useEffect(() => {
    if (!auth && !id) { initState() }
    // console.log('App Check:', auth, id)
  }, [auth, id])



  return (
    <>
      <Router>
        <Header
          auth={auth}
          setAuth={setAuth}
          query={query}
        />

        <Switch>
          {/* public home page to all users */}
          <Route exact path="/">
            <HomePage
              auth={auth}
              query={query}
            />
          </Route>

          {/* access to sign-up/signin-in */}
          <RouteAuthenticate
            exact
            auth={auth}
            setAuth={setAuth}
            query={query}
            path="/user/auth/:entry"
            component={AuthPage}
          />

          {/* access to user page */}
          <RouteProtected
            auth={auth}
            setAuth={setAuth}
            query={query}
            path="/user"
            component={UserPage}
          />

          {/* route to match profile */}

          <Route path="/profile"
            render={(props) => <MatchProfile {...props} id={id} isAuthed={auth} />}
          />

          {/* unknowm route error page */}
          <Route path='/*' component={ErrorPage} />

        </Switch>
      </Router>
    </>
  );
}

export default App;
