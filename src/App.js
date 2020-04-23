import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import './App.css'

// Pages
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Posts from './pages/Posts'
import Post from './pages/Post'
import PropertyList from './pages/PropertyList'

// Components
import Footer from './components/Footer'
import NavBar from './components/NavBar'

// Data from Redux
import store from './store'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
        <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/posts/:post_id" component={Post} />
            <Route path="/posts" component={Posts} />
            <Route path="/properties" component={PropertyList} />
          </Switch>  
      </Router>
      <Footer />
      </Provider> 
    )
  }  
}

export default App
