import React,{useState} from 'react'
import useStore from './app/store'

const Input = () => {

    const person = useStore((state) => state.addPersons);
    const [name, setName] = useState("");

    const add = () => {
        person(name);
        setName("");
    }

  return (
    <div>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <button onClick={add}>Add Person</button>
    </div>
  )
}

export default Input
