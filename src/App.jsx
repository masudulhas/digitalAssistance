import React, { Component } from 'react';
import './App.css';
import './sass/app.scss';
import TopSection from './components/top/index';
import BottomSection from './components/bottom/index';
import axios from 'axios'
// Apixu.com we'll use
const WEATHER_KEY = "cecb8ef461d84875b98225551191104";
const SL_KEY = "dc0d1066c8834c2d8343fc9e66e474a6";

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
        isLoading: false,
        temp_c: data.current.temp_c,
        isDay: data.current.is_day,
        text: data.current.condition.text,
        iconURL: data.current.condition.icon
      }) 
    }).catch( (err) => {
      if(err)
      console.error("Cannot fetch weather data", err)
    }) 
    this.slData();
}
 
  slData(){
    const headers = {
      'Access-Control-Allow-Headers': 'Content-Type',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Origin': '*',
    };
    const URL1 = `https://cors-anywhere.herokuapp.com/https://api.sl.se/api2/realtimedeparturesV4.json?key=${SL_KEY}&SiteID=8284&timewindow=10`;
    axios.get(URL1, { headers }).then((response) => {
        return response.data;
    }).then((data) => {
      const resp = data.ResponseData.Buses[0];
      this.setState({
        Destination: resp.Destination,
        LineNumber: resp.LineNumber,
        DisplayTime: resp.DisplayTime,
        StopAreaName: resp.StopAreaName
    })
    }).catch((err) => {
      if (err)
        console.error("Cannot fetch sl data", err);
    })
  }

  render() {
    const { isLoading, cityName, temp_c, isDay, text, iconURL, 
      Destination, LineNumber, DisplayTime, StopAreaName } = this.state;
    return (
      <div className="app-container">
        <div className="main-container">
        { isLoading && <h3>Weaher Loading ....</h3>}
        { !isLoading && (
        <div className="top-section"> 
          <TopSection
          location = {cityName}
          temp_c = {temp_c}
          isDay = {isDay}
          text = {text}
          iconURL = {iconURL}
          /> 
        </div>
      )}
          <div className="bottom-section">
           <BottomSection
            Destination = {Destination}
            LineNumber = {LineNumber}
            DisplayTime = {DisplayTime}
            StopAreaName={StopAreaName}
           /> 
           </div>
        </div>
      </div>
    );
  }
}

export default App;
