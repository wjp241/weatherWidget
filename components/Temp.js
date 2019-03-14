import React from 'react';
import '../styles/Temp.css';

function Temp(props) {
  return (
    <div className={'temperatures'}>
      {props.celsius.map((val, i) => <h1 className={`temp n${i}`} key={i}>{Math.floor(val) + '°'}</h1>)}
    </div>
  )

}

export default Temp;
