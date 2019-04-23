import React, { Component } from 'react';
import './App.css';
import './sass/app.scss';
import TopSection from './components/top/index';
import BottomSection from './components/bottom/index';
import axios from 'axios'
// Apixu.com we'll use
const WEATHER_KEY = "cecb8ef461d84875b98225551191104";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      cityName: "Jordbro",
      isLoading: true
    }
  }

  componentDidMount(){
    const { cityName } = this.state;

    const URL = `http://api.apixu.com/v1/current.json?key=${WEATHER_KEY}&q=${cityName}`;

    axios.get(URL).then((res)=>{
      return res.data;
    }).then((data) =>{
      this.setState({
        // isLoading: false,
        temp_c: data.current.temp_c,
        isDay: data.current.is_day,
        text: data.current.condition.text,
        iconURL: data.current.condition.icon
      }) 
    }).catch( (err) => {
      if(err)
      console.error("Cannot fetch weather data", err)
    })

  }
  render() {
    const { cityName, temp_c, isDay, text, iconURL } = this.state;
    return (
      <div className="app-container">
        <div className="main-container">
          <div className="top-section"> 
          <TopSection
          location = {cityName}
          temp_c = {temp_c}
          isDay = {isDay}
          text = {text}
          iconURL = {iconURL}
          /> 
          </div>
          <div className="bottom-section"> <BottomSection/> </div>
        </div>
      </div>
    );
  }
}

export default App;
