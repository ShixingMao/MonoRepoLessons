import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("Mao Mao")

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to CS 5500, {name}!</h1>
        <p>This is my first React + Vite + TypeScript project.</p>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />

        <button onClick={() => setCount(count + 1)}>
          Count: {count}
        </button>

        <button onClick={() => setCount(0)}>Reset</button>
      </header>
    </div>
  )
}

export default App
