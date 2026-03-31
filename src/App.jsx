
import './App.css'
import Nav from './component/Navigation Bar/Nav'
import { use, useState } from 'react'

const FeathData = fetch("/Data.json").then(res => res.json())
function App() {
  const PromisesData = use(FeathData)
  const [SelectCard, setSelectCard] = useState([])
  return (
    <>
      <Nav SelectCard={SelectCard}></Nav>
    </>
  )
}

export default App
