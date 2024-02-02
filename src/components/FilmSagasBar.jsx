import React, { Component } from 'react';
import MoviePoster from "./innercomponents/MovieItem"

class FilmSagas extends Component {
    state = {
        loading: true,
        error: null,
        filmArray: [],
        queryParam: this.props.queryParam,
        currentUser: this.props.currentUser
    }

    riformattaInput(input) {
        return input.replace(/\s/g, "+")
    }
// Ho usato una api key che era stata posta in chat durante il briefing della 
//mattinata, non ricordo chi la mise, ma sapendo dei 1000 usi giornalieri 
//ho pensato non fosse necessario chiederne un'altra.

    fetchFilmFromQueryParam = async (param) => {
      
        fetch(`http://www.omdbapi.com/?apikey=1ab1d1e3&s=${param}&page=2&type=movie`)
        .then(response => {
          if (!response.ok) { 
            throw new Error('Connection error')
          }
          return response.json()
        })
        .then(data => {
            this.setState({
                error: false,
                loading: false,
                filmArray: data.Search,
              })
        })
        .catch(error => {
          console.log('There is an error with the fetch:', error)
          this.setState({
          error: true,
          loading: false
        })
        })
    }

    componentDidMount() {
        let param = this.riformattaInput(this.props.queryParam)
        this.fetchFilmFromQueryParam(param)
      }

  render() {

    return (
      <div className='d-flex'>
        {this.state.filmArray.map((film, index) => {
          return (
            <div key={index}>
            <MoviePoster film={film}/>
            </div>
          )
        })}
      </div>
    );
  }
}

export default FilmSagas