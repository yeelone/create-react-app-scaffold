import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class FirstView extends Component {
  constructor(props) {
    super(props)
  }
  render() {  
      return (
          <div>
            <p> this is first view</p>
           
            <p> <Link to={`/second`}>to second view </Link></p>
            <p> <Link to={`/asyncapp`}>to asyncapp</Link></p>
          </div>
      )
  }
}

export default connect()(FirstView)