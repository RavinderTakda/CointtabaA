import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { AllRoute } from './Routes/Route'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <AllRoute/>
    </div>
  )
}

export default App
