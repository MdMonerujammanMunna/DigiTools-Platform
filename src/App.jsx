
import './App.css'
import Nav from './component/Navigation Bar/Nav'
import HeroBanner from './component/Hero Banner/HeroBanner'
import Star from './component/Star/Star'
import DigitalTool from './component/DigitalTool/DigitalTool'
import Steps from './component/Steps/Steps'
import Simple from './component/Simple prices/Simple'
import Workflow from './component/Workflow/Workflow'
import Footer from './component/Footer/Footer'
import { use, useState } from 'react'

const FeathData = fetch("/Data.json")
  .then(res => res.json())
function App() {
  const PromisesData = use(FeathData)
  const [SelectCard, setSelectCard] = useState([])
  console.log(SelectCard)
  return (
    <>
      <Nav SelectCard={SelectCard}></Nav>
      <HeroBanner></HeroBanner>
      <Star></Star>
      <DigitalTool PromisesData={PromisesData} SelectCard={SelectCard} setSelectCard={setSelectCard}></DigitalTool>
      <Steps></Steps>
      <Simple></Simple>
      <Workflow />
      <Footer></Footer>
    </>
  )
}

export default App
