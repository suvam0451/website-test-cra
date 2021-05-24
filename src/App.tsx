import { useState } from 'react';
import logo from './logo.svg';
import { Provider, connect } from "react-redux"
import store from "./redux/store"

import './App.css';


const Counter = () => {
  const [Count, setCount] = useState(0)

  const IncrementCount = (e: any) => {
    // setCount()
  }
  return <button>

  </button>
}
const MainApp = () => {
  return <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
    </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
    </a>
    </header>
  </div>
}

function App() {
  return (
    <Provider store={store}><MainApp /></Provider>
  );
}



export default App;
