import React, { Component } from 'react'
import FilmSagas from "./FilmSagasBar"
class Main extends Component {
  render() {
    return (
         <div>
        <h2>Lasciati conquistare da questa avvincente epopea spaziale:</h2>
        <FilmSagas currentUser={this.props.currentuserName} queryParam={"Star Wars"}/>
        <h2>Non resistere alla tentazione dell'unico anello:</h2>
        <FilmSagas currentUser={this.props.currentuserName} queryParam={"The Lord of the rings"}/>
        <h2>Realtà o finzione, sarai tu a scoprirlo:</h2>
        <FilmSagas currentUser={this.props.currentuserName} queryParam={"The Matrix"}/> */
      </div>
    )
  }
}

export default Main;