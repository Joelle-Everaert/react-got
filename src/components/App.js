import { Component } from 'react';
import '../sass/app.scss'


class App extends Component {
  state = {   // définition d'un state
  data:[],
  loading: false
}

componentDidMount(){
  this.setState({
    loading:true
  })

  fetch('https://anapioficeandfire.com/api/houses')
    .then((response) => {  //fonction call back
      return response.json()  // recupère en format json
    })
    .then((result) => {
      console.log(result)
      this.setState({
        data: result,
        loading: false
      })
    })
  }
  
  render() {
    if(this.state.data.length === 0 && this.state.loading == false){
      return <div className="title">No result</div>
    }
    if(this.state.loading == true){
      return <div className="title">Loading ........</div>
    }

    return (
      <div className="title">
        <h1>GAME OF THRONE HOUSES</h1>
        <div className="container">
        {this.state.data.map(house=>(
          <div className="card">
            <h2>{house.name}</h2>
            <p>{house.coatOfArms}</p>
            <h3>Region: {house.region}</h3>
            </div>
        ))}
        </div>
      </div>
    );
  }
}

export default App;

