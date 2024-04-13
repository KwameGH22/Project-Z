import { useState } from 'react'

import './App.css'
import Tagline from './components/tagline/Tagline';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Tagline/>
    </div>
  )
}

export default App
