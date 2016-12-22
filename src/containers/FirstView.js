import React, {  Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class FirstView extends Component {
  render() {  
      return (
          <div>
            <p>First View</p>
            <p> <Link to={`/second`}>Second View </Link></p>
            <p> <Link to={`/asyncapp`}>to asyncapp</Link></p>
          </div>
      )
  }
}

export default connect()(FirstView)