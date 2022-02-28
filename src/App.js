import React from "react";
import './App.css';
import { Box } from "./components/Box.jsx";
import './styles/global.css'

const tempMin = -20;
const tempMax = 40;
const heartMin = 80;
const heartMax = 180;
const stepsMin = 0;
const stepsMax = 50000;



export class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      water: 1.5,
      heart: 120,
      temperature: -10,
      steps: 3000,
    }
  }
  calculateWater = () =>{
    // this.setState({water : 1.5})
    let water = 1.5
    let steps = this.state.steps
    let heart = this.state.heart
    let temperature = this.state.temperature
    if(temperature > 20){
      water += (temperature - 20) * 0.02;
    }
    if(heart > 120){
      water += (heart - 120) * 0.0008;
    }
    if(steps > 10000){
      water += (steps - 10000) * 0.00002;
    }
    
    this.setState({water})
    
  }

  onHeartChange = (e) => {
    this.setState({heart : e.target.value})
    this.calculateWater()
  }

  onStepsChange = (e) => {
    this.setState({steps : e.target.value})
    this.calculateWater()
  }

  onTemperatureChange = (e) =>{
    this.setState({temperature : e.target.value})
    this.calculateWater()
  }



  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          {/* Water */}
          <Box color="#3A85FF" icon="local_drink" value={this.state.water.toFixed(2)} unit="L" />
          {/* Steps */}
          <Box color="black" icon="directions_walk" value={this.state.steps} unit="steps" min={stepsMin} max={stepsMax} onChange={this.onStepsChange}/>
          {/* Heart */}
          <Box color="red" icon="favorite" value={this.state.heart} unit="bpm" min={heartMin} max={heartMax} onChange={this.onHeartChange} />
          {/* Temperature */}
          <Box color="yellow" icon="wb_sunny" value={this.state.temperature} unit="°C"  min={tempMin} max={tempMax} onChange={this.onTemperatureChange} />
        </div>
      </div>
    );
  }
}
export default App;
