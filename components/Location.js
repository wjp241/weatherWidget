import React from 'react';
import '../styles/Location.css';

function Location(props) {
  console.log(props.description)
  return <>
    <span className={"place"}>{props.name}</span>
    <img className={"icon"} src={`http://openweathermap.org/img/w/${props.icon}.png`}></img>
    <span className={"description"}>{props.description}</span>
  </>;
}

export default Location;
