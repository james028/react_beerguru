import React, { Component } from 'react'
import './modal.css'
import axios from 'axios';

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
                        this.setState({postLoad: response.data})
                    });
            }  
        }
    }

  render() {
        let post = '';
        if (this.props.idik) {
            post = '<p>LOading..</p>';
        }
        if (this.state.postLoad) {
                post = (
                    <div className="modal">
                        <h1>ss{this.state.postLoad.id}</h1>
                        <p>Content</p>
                    </div>
        
                );
            }
            return post;
  }
}

export default Modal;
