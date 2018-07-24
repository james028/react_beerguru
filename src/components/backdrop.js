import React, { Component } from 'react'
import './backdrop.css'

class Backdrop extends Component {
  render() {
    return (
      this.props.showBack ? <div className="backdrop" onClick={this.props.closeBack}>ss</div> : null
    )
  }
}

export default Backdrop;
