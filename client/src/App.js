import { 
  BrowserRouter as Router, 
  Route , Switch
} from 'react-router-dom'
import React from 'react'

import './reset.css'
import './app.css'

// import ___ from './components/___/'
import Header from './components/Header/Header.js'
// import Main from './components/Main/Main.js'

import HomePage from './views/HomePage/HomePage.js'
import MainPage from './views/MainPage/MainPage.js'
// import LandingPage from './views/LandingPage/LandingPage.js'

// import axios from 'axios';



function App () {
  return (
    <div className="App">
      <Router>
        <Header />

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route exact path="/main">
            <MainPage />
          </Route>

          {/* <Route exact path="/landing"> */}
            {/* <LandingPage /> */}
          {/* </Route> */}
        </Switch>

      </Router>
    </div>
  );
}



export default App