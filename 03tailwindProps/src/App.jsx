/* eslint-disable no-unused-vars */
import './App.css'
import Card from './component/Card'

function App() {
  let myObj = {
    name:"mayur"
  }

  return (
   <>
     <h1 className="text-4xl font-semibold text-blue-500 mb-4 ">React Props</h1>

     <Card title ="mayur" />
     <Card title ="xyz"/>
     <Card />


   </>
  )
}

export default App
