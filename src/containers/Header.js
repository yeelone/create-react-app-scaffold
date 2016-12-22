import React, { Component } from 'react'
import { connect } from 'react-redux'

import './Header.css'

class Header extends Component {
  render() {  
      return (
        <header>
            <p>标题</p>
        </header>
      )
  }
}

export default connect()(Header)
