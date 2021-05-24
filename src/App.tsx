import { useState, ChangeEvent } from 'react';
import logo from './logo.svg';
import { Provider, useDispatch, useSelector } from "react-redux"
import { INotesState, ICountReducerAction, ENotesReducerAction, ECountReducerAction } from "./redux/store"

import './App.css';

type ICounter = {
  addNote(note: string): void
}

const Counter = ({ addNote }: ICounter) => {
  const [Count, setCount] = useState(0)
  const [Note, setNote] = useState("")

  const IncrementCount = (e: any) => {
    // setCount()
  }

  const updateNote = (e: ChangeEvent<HTMLInputElement>) => {
    setNote(e.target.value)
  }

  const onAddNoteClick = () => {
    addNote(Note)
    setNote("")
  }

  return <><button>
    <input onChange={updateNote} type="text" name="note" />
    <button onClick={onAddNoteClick}>Add Note</button>
  </button></>
}

const MainApp = () => {
  const notes = useSelector<INotesState, INotesState["notes"]>((state) => state.notes)
  const dispatch = useDispatch()

  const onAddNote = (str: string) => {
    console.log(notes);
    dispatch({ type: ENotesReducerAction.ADD, payload: str })
  }

  return <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
    </p>
      <Counter addNote={onAddNote} />
      <ul>
        {notes.map((note, i) => {
          return <li key={i}>{note}</li>
        })}
      </ul>
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
    <MainApp />
  );
}



export default MainApp;
