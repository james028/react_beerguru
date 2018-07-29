import React, { Component } from 'react'
import './modal.css'
import axios from 'axios';
import Backdrop from './backdrop';
import Details from '../Details/details'

class Modal extends Component {

state = {
    postLoad: null
};

componentDidUpdate() {
        if (this.props.idik) {
            if (!this.state.postLoad || (this.state.postLoad && this.state.postLoad.idik !== this.props.idik)) {
                axios.get(`https://api.punkapi.com/v2/beers/${this.props.idik}`)
                    .then(response => {
                        //console.log(response)
                        this.setState({postLoad: response.data[0]})
                    });
            }  
        }
    }

    render () {
        let post = '';
        if (this.props.idik) {
            post = <p className="loading">Loading...</p>;
        }
        if (this.state.postLoad) {
            post = (
                <div>
                    <Backdrop 
                    closeBack={this.props.close}
                    modalBack={this.props.modal}/>
                    <div className="modal" style={{opacity: this.props.modal ? '1' : '0',
                                                    visibility: this.props.modal ? 'visible' : 'hidden'}}                        
                    >
                    <Details 
                    brewer={this.state.postLoad.brewers_tips}
                    abv={this.state.postLoad.abv}
                    ibu={this.state.postLoad.ibu}
                    image={this.state.postLoad.image_url}
                    desc={this.state.postLoad.description}
                    tagline={this.state.postLoad.tagline}
                    name={this.state.postLoad.name}/>
                    </div>
                </div>
            );
        }
        return post;
    }
}

export default Modal;
