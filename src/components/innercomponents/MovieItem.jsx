//Cerco di prevenire il drag delle immagini
import React, { Component } from 'react';
import './movieItems.css';

class MoviePoster extends Component {
  preventDragHandler = (e) => {
    e.preventDefault();
  };

  render() {
    console.log(this.props);
    let posterUrl = this.props.film.Poster !== "N/A" ? this.props.film.Poster : "https://th.bing.com/th/id/R.1ab4b6eea2333696688b3947ab15e73d?rik=ttjoWYlSUgeqAg&riu=http%3a%2f%2fimages.fineartamerica.com%2fimages-medium-large%2fsmall-magellanic-cloud-galaxy-satellite-view-stocktrek.jpg&ehk=2AVzrGEFPF5hfa3OPf6v4J1sMdjDDWfzB7ndkd9iqgY%3d&risl=&pid=ImgRaw&r=0";
    return (
      <div className="film-item">
        <img 
          src={posterUrl} 
          alt="Movie poster"
          onDragStart={this.preventDragHandler}
        />
      </div>
    );
  }
}

export default MoviePoster;