
import './App.css'
import Nav from './component/Navigation Bar/Nav'
import HeroBanner from './component/Hero Banner/HeroBanner'
import Star from './component/Star/Star'
import DigitalTool from './component/DigitalTool/DigitalTool'
import Steps from './component/Steps/Steps'
import { use, useState } from 'react'

const FeathData = fetch("/Data.json").then(res => res.json())
function App() {
  const PromisesData = use(FeathData)
  const [SelectCard, setSelectCard] = useState([])
  return (
    <>
      <Nav SelectCard={SelectCard}></Nav>
      <HeroBanner></HeroBanner>
      <Star></Star>
      <DigitalTool PromisesData={PromisesData} SelectCard={SelectCard} setSelectCard={setSelectCard}></DigitalTool>
       <Steps></Steps>
    </>
  )
}

export default App
