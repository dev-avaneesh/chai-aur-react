import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "hitesh",
    age:21
  }
  let newArr = [1,2,3]

  return (
    <>
   <h1 className='bg-green-400 text-black rounded-xl'>Tailwind Css</h1>
 <Card username="chaiaurcode" btnText="clickme" />
 <Card username="Avaneesh" />
    </>
  )
}

export default App
  