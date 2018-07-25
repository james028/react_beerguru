import React, { Component } from 'react'
import './details.css'

class Details extends Component {
  render() {

    const Image = {
        width: '80px',
        height: '370px',
        backgroundImage: `url(${this.props.image})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
    };  


      const { name, tagline, desc, ibu, abv, brewer } = this.props;
    return (
      <div className="details-container">
        <div className="details-image" style={Image}></div>
        <div className="details-desc">
            <p className="details-name">{name}</p>
            <p className="details-tagline">{tagline}</p>
            <div className="details-ibu">
                <div><strong>IBU: </strong>{ibu}</div>
                <div><strong>ABV: </strong>{abv}</div> 
            </div>
            <div className="details-description">
            {desc}
            <p><strong>Brewer tips: </strong></p>
            {brewer}
            </div>
        </div>
      </div>
    )
  }
}

export default Details;
