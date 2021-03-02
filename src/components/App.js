import { Component } from 'react';
import '../sass/app.scss'





class App extends Component {
  state = {   // définition d'un state
  name:{}
}

componentDidMount(){
  fetch('https://anapioficeandfire.com/api/characters/583')
    .then((response) => {  //fonction call back
      return response.json()  // recupère en format json
    })
    .then((result) => {
      console.log(result)
      this.setState({name: result})
    })
  }
  
  render() {
    if(this.state.name.aliases === undefined){
      return <div className="title">Loading beeetch</div>
    }
    return (
      <div className="title">
        <h1>GAME OF THRONE</h1>
        <p>Name: {this.state.name.name}</p>
        <p>Gender: {this.state.name.gender}</p>
        <p>Titles: {this.state.name.titles}</p>
        <ul>
          Aliases:
          {this.state.name.aliases.map((alias)=>(
            <li>{alias}</li>
          ))}
          <br/>
          Tv Serie:
          {this.state.name.tvSeries.map((tv)=>(
            <li>{tv}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;

