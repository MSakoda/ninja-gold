import React from 'react';
import './Location.css'

function Location(props) {
  return (
    <div className="location" onClick={() => props.click(props.location)}>
       {props.location.name}
    </div>
  )
}

export default Location;
