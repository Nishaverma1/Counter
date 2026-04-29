// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
import './App.css'
import Hello from './Admin/Hello';
import Bye from './Admin/bye';
import First from './Admin/first';
import Sec from './Admin/Sec';

function App() {
  function handleClick() {
    alert("Button clicked!");
  }

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
   
      <Sec />
    </div>
  );
}

export default App

