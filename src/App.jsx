import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Navigation from './components/Navigation'
import Greetings from './containers/Greetings'
import Skills from './containers/Skills'
// import Proficiency from './containers/Proficiency'
import Education from './containers/Education'
import Experience from './containers/Experience'
import Projects from './containers/Projects'
import GithubProfile from './containers/GithubProfile'

import './assets/css/App.css'

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route
          path="/"
          exact
          render={(props) => (
            <>
              <Navigation />
              <Greetings />
              <Skills />
              {/* <Proficiency /> */}
              <Education />
              <Experience />
              <Projects />
              <GithubProfile />
            </>
          )}
        />
      </Switch>
    </BrowserRouter>
  )
}

export default App
