import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [listData, setlistData] = useState([])

  const [currentItem, setcurrentItem] = useState('')
  let inputRef = useRef()


  const addData = () => {


    if (currentItem.length > 0) {
      setlistData((prevList) => [...prevList, currentItem]);
      inputRef.current.value = "";
      setcurrentItem("")
    } else {
      alert("Enter something")
    }



  }

  return (
    <>

      <h1>React ToDo App</h1>
      <input ref={inputRef} type='text' placeholder='Enter item' onChange={(e) => setcurrentItem(e.target.value)} />
      <button onClick={addData}>Add</button>

      {listData.map((item, index) => {
        return <li key={index}>{item}</li>
      })}

    </>
  )
}

export default App
