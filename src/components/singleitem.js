import React, { Component } from 'react'
import './singleitem.css'


class SingleItem extends Component {

  render() {
    
    const BackgroundImage = {
        width: '80px',
        height: '70%',
        backgroundImage: `url(${this.props.image})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        margin: '10px auto'
    };  

    return (
            <div className="single-item-one" onClick={this.props.clicked}>
                <div style={BackgroundImage}></div>
                <div>
                    <p className="single-item-title">{this.props.name}</p>
                    <p>{this.props.tagline}</p>
                </div>
            </div>
    )
  }
}

export default SingleItem;

