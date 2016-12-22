import React,{ Component } from 'react'
import { connect } from 'react-redux'

import './Footer.css'

class Footer extends Component {
  render() {  
      return (
        <footer>
            <p>注脚</p>
        </footer>
      )
  }
}

export default connect()(Footer)