import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'


// Components
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Posts from './components/Posts'
import Post from './components/Post'
import PropertyList from './components/PropertyList'
import Footer from './components/Footer'
import NavBar from './components/NavBar'

// Data from Redux
import store from '../store'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
        <div>
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/posts/:post_id" component={Post} />
            <Route path="/posts" component={Posts} />
            <Route path="/properties" component={PropertyList} />
          </Switch>
          <Footer />
        </div>
      </Router>
      </Provider>  
    )
  }  
}

export default App