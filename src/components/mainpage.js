import React, { Component } from 'react'
import SingleItem from './singleitem'

class MainPage extends Component {
    constructor() {
        super();
        
        this.state = {
            beers: [],
            modal: false
        };
    }

    componentDidMount() {
        const url = 'https://api.punkapi.com/v2/beers';

        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({
                beers: data
            }));
    }

    handleClickModal = () => {
        this.setState({
            modal: true
        })
    }

  render() {
    return (
      <div className="row">
            <div className="col">
                {this.state.beers.map((e,i) => {
                    return <SingleItem 
                            clickShowModal={this.handleClickModal}
                            image={e.image_url}
                            tagline={e.tagline}
                            name={e.name}/>
                })}   
            </div>
      </div>
    )
  }
}

export default MainPage;
