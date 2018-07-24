import React, { Component } from 'react'
import SingleItem from './singleitem'
import Modal from './modal'
import InfiniteScroll from "react-infinite-scroll-component";
import axios from 'axios';


class MainPage extends Component {
    constructor() {
        super();
        
        this.state = {
            beers: [],
            modal: false,
            items: Array.from({ length: 20 }),
            hasMore: true,
            loadItemPart: null
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        //const url = 'https://api.punkapi.com/v2/beers';

        //fetch(url)
            //.then(response => response.json())
            //.then(data => this.setState({
                //beers: data
            //}));

            axios.get('https://api.punkapi.com/v2/beers')
            .then(response => {
                this.setState({
                    beers: response.data
                })
            });
    }

    fetchMoreData = () => {
        if (this.state.items.length >= 20) {
          this.setState({ hasMore: false });
          return;
        }
        setTimeout(() => {
          this.setState({
            items: this.state.items.concat(Array.from({ length: 20 }))
          });
        }, 500);
      };

    handleClickModal = () => {
        this.setState({
            modal: true,
        })
        console.log("ok");
    }


    handleClickModalClose = () => {
        this.setState({
            modal: false
        })
    }

    handleClickOnItem = (id) => {
        this.setState({
            loadItemPart: id
        })
        console.log("click");
    }


  render() {
    return (
      <div className="row">
                <InfiniteScroll
                 dataLength={this.state.items.length}
                 next={this.fetchMoreData}
                 hasMore={this.state.hasMore}
                 loader={<p style={{ textAlign: "center" }}>Loading...</p>}
                 endMessage={
                   <p style={{ textAlign: "center" }}>
                     <b>Yay! You have seen it all</b>
                   </p>
                 }
                >
                <div className="col">
                <Modal idik={this.state.loadItemPart}/>
                    {this.state.beers.map((e,i) => {
                        return <SingleItem 
                        clicked={() => this.handleClickOnItem(e.id)}
                        key={i}
                        image={e.image_url}
                        tagline={e.tagline}
                        name={e.name}/>  
                    })} 
                     </div>
                </InfiniteScroll>  
           
      </div>
    )
  }
}

export default MainPage;
