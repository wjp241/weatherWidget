import React, { Component } from 'react';
import '../styles/App.css';
import Location from './Location';
import Temp from './Temp';
import { throwError } from 'rxjs';

const API = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const COUNTRY_KEY = ',us&appid=709847967f5e54b97308c1b2cae4dee5&units=metric';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      value: '',
      celsius: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  getData(url) {
    console.log(url);
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        const { name, weather, main: faren } = data;
        const tempArr = [faren.temp, faren.temp_min, faren.temp_max];
        const descripArr = weather[0].description.split(" ");
        const capitalStr = descripArr.map(val => val.charAt(0).toUpperCase() + val.slice(1)).join(" ")
        this.setState({
          name: name,
          description: capitalStr,
          icon: weather[0].icon,
          celsius: tempArr
        })
      }).catch(() => throwError)
  }
  componentDidMount() {
    this.getData('https://api.openweathermap.org/data/2.5/weather?zip=10036,us&appid=709847967f5e54b97308c1b2cae4dee5&units=metric')
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    let ZIP = this.state.value;
    console.log(ZIP)
    this.getData(API + ZIP + COUNTRY_KEY)
  }
  render() {
    return (
      <>
        <Location name={this.state.name} description={this.state.description} icon={this.state.icon}></Location>
        <Temp celsius={this.state.celsius} ></Temp>
        <hr></hr>
        <div className={'modals'}>
          <form onSubmit={this.handleSubmit}>
            <span className={'zipcode'} >Zip Code:</span>
            <input className={"modal zip"} type="text" placeholder="10036" value={this.state.value} name="zipcode" onChange={this.handleChange} />
            <input className={"modal update"} type="submit" value="Update" />
          </form>
        </div>
      </>
    );
  }
}

export default App;
