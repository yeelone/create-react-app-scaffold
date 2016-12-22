import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import Header from './Header'
import Footer from './Footer'
import "./App.css"

class App extends Component {
 render() {
    return (
        <div>
            <Header />
            <div id="main"> 
              {this.props.children}
            </div>
            <Footer />
        </div>
    )
  }
}

export default connect()(App)
