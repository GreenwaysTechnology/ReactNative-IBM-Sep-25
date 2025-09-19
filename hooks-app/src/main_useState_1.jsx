import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


const Counter = () => {
  const [counter, setCounter] = useState(1)

  const onIncrement = () => {
    // setCounter((prevState) => {
    //   return prevState + 1
    // })
    setCounter(counter + 1)
  }

  return <div>
    <h1>Counter: {counter}</h1>
    <button onClick={onIncrement}>+</button>
  </div>
}

const App = () => {
  return <Counter />
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
