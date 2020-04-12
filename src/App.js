import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Posts from './pages/Posts'
import Post from './pages/Post'

// Components
import Footer from './components/Footer'
import NavBar from './components/NavBar'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/posts/:post_id" component={Post} />
            <Route path="/posts" component={Posts} />
          </Switch>
          <Footer />
        </div>
      </Router>  
    )
  }  
}

export default App
