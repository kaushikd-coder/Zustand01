import './App.css';
import useStore from './app/store';
import { useEffect, useState } from 'react';
import Input from './input';

function App() {
  
  const people = useStore((state) => state.Persons)
  const toogleDarkMode = useStore((state) => state.toogleDarkMode)
  const dark = useStore((state) => state.dark);

  useEffect(() => {
        if(dark){
          document.querySelector('body').classList.add('dark')
        }else{
          document.querySelector('body').classList.remove('dark')
        }
  },[dark])

  return (
    <div className="App">
    <Input />
     <h1> Welcome to Zustand State ManageMent Library </h1>
     <h3>Right now we have only {people.length} people onboard</h3>
     <button onClick={toogleDarkMode}>DarkMode</button>
     <ul>
        {people.map((e) => {
          return(
            <div key={e.id}>
              <li>{e}</li>
            </div>
          )
        })}
     </ul>
    </div>
  );
}

export default App;
