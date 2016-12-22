import  React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class SecondView extends Component {
  render() {  
      return (
          <div>
            <p> this is second view</p>
            <p> <Link to={`/first`}>to first view </Link></p>
            <p> <Link to={`/asyncapp`}>to asyncapp</Link></p>
          </div>
      )
  }
}

export default connect()(SecondView)
