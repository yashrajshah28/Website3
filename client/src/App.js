import React from 'react'
// import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Route, Switch } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Errorpage from './Components/Errorpage'

const App = () => {
  return (
    <>
      <Navbar />

      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/about'>
          <About />
        </Route>

        <Route path='/contact'>
          <Contact />
        </Route>

        <Route path='/login'>
          <Login />
        </Route>

        <Route path='/signup'>
          <Signup />
        </Route>

        <Route path="*">
          <Errorpage />
        </Route>

      </Switch>
    </>
  )
}

export default App