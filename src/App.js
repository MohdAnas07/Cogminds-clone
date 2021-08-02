import React, { useState } from 'react'
import './App.css';
import Main from './Components/Main/Main';
import SideNav from './Components/Main/SideNav/SideNav';

function App() {


  const [toggle, setToggle] = useState(true)

  return (
    <div className="App">
      <Main toggle={toggle} setToggle={setToggle} />
      <SideNav toggle={toggle} setToggle={setToggle} />
    </div>
  );
}

export default App;
