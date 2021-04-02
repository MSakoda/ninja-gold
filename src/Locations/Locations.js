import React from 'react';
import Location from './Location/Location';

function Locations(props) {

  const locations = [
    {
      name: 'farm',
      gold: 1
    },
    {
      name: 'house',
      gold:5
    },
    {
      name: 'cave',
      gold:10
    }
  ]

  return (
    <div>
       { locations.map((location,idx) => <Location key={location.name} location={location} click={props.click}/>)}
    </div>
  )
}

export default Locations;
