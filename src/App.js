import logo from './logo.svg';
import './App.css';
import Locations from './Locations/Locations';
import React, { useState } from 'react';

function App() {
  const [gold,setGold] = useState(0);

  function onClickLocation(location){
    console.log("clicked location. gold:",gold)
    setGold(gold + location.gold);
  }


  return (
    <div className="App">

<nav className="navbar navbar-light bg-light">
  <a className="navbar-brand" href="#">Ninja Gold</a>
</nav>
      <Locations click={onClickLocation}/>
      Gold: {gold}
    </div>
  );
}

export default App;
