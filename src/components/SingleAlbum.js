import React, { Component } from 'react'
import {withRouter} from 'react-router-dom' 
import albums from '../data.json'
import './style.css'

class SingleAlbum extends Component {
  constructor() {
    super()
    this.state = {
      album: {},
    }
  }

  componentDidMount() {
    //Find album using match object
    const {albumId} = this.props.match.params
    const album = albums.find(element => element.id === +albumId) 

    if(!album){
      this.props.history.push('/404')
    } else {
      this.setState({
        album: album,
      })
    }
  }

  componentDidUpdate(prevProps) {
    //Check for change in match object and use it to find album
  }

  handleBuyAlbum = () => {
    alert('YOU BOUGHT IT')
    //Return to home page
  }

  render() {
    return (
      <div className="single-album">
        <h2>
          {this.state.album.artist} - {this.state.album.title}
        </h2>
        <img
          src={this.state.album.image}
          alt={this.state.album.title}
          className="large-album-art"
        />
        <button onClick={() => this.handleBuyAlbum()} className="buy-button">
          Buy Now!
        </button>
      </div>
    )
  }
}
export default withRouter(SingleAlbum)
