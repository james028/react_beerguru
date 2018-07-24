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
                axios.get('https://api.punkapi.com/v2/beers/' + this.props.idik)
                    .then(response => {
                        //console.log(response)
                        this.setState({postLoad: response.data})
                    });
            }  
        }
    }

    render () {
        let post = 'aa';
        if (this.props.idik) {
            post = '<p>LOading..</p>';
        }
        if (this.state.postLoad) {
            post = (
                <div className="FullPost">
                    <h1>test{this.state.postLoad.name}</h1>
                </div>
            );
        }
        return post;
    }
}

export default Modal;
