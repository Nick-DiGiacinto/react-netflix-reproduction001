import React, { Component } from 'react'
import FilmSagas from "./FilmSagasBar"
class Main extends Component {
  render() {
    return (
         <div>
        <h2>Lasciati conquistare da questa avvincente epopea spaziale:</h2>
        <FilmSagas currentUser={this.props.currentuserName} queryParam={"Star Wars"}/>
        <h2>Avengers, il team di supereroi più iconico della Marvel:</h2>
        <FilmSagas currentUser={this.props.currentuserName} queryParam={"Marvel"}/>
        <h2>Realtà o finzione, sarai tu a scoprire il "potere" del 7:</h2>
        <FilmSagas currentUser={this.props.currentuserName} queryParam={"007"}/> */
      </div>
    )
  }
}
// Nell'ultima saga volevo scegliere gli 007 di James Bond e compagnia, ma il risultato ottenuto dalla fetch è stato così interessante che ho pensato di lasciarlo e di fare una piccola battuta sul "potere del 7", spero di non essere risultato offensivo.
export default Main;