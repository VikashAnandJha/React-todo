import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { v4 as uuidv4 } from 'uuid';
//uuidv4();
function App() {

  const [listData, setlistData] = useState([])

  const [currentItem, setcurrentItem] = useState('')
  let inputRef = useRef()


  const addData = () => {

    let item = {};
    item.id = uuidv4();
    item.content = currentItem


    if (currentItem.length > 0) {
      setlistData((prevList) => [...prevList, item]);
      inputRef.current.value = "";
      setcurrentItem("")
    } else {
      alert("Enter something")
    }



  }

  const deleteItem = (id) => {
    console.log("Delete request for :" + id)

    let freshitems = listData.filter((item) => {
      return item.id != id
    })
    setlistData(freshitems)

  }

  return (
    <>

      <h1>React ToDo App</h1>
      <input ref={inputRef} type='text' placeholder='Enter item' onChange={(e) => setcurrentItem(e.target.value)} />
      <button onClick={addData}>Add</button>

      {listData.map((item, index) => {


        return <li key={index}>{item.content} <button onClick={() => deleteItem(item.id)}>X</button></li>
      })}

    </>
  )
}

export default App
