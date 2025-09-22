import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


const Counter = () => {
  //state declration
  const [count, setCount] = useState(0)
  const onIncrement = () => {
    //biz logic
    setCount(count + 1)
  }
  return <div>
    <h1>Count {count}</h1>
    <button onClick={onIncrement}>+</button>
  </div>
}
const Increment = ()=>{
  return <div>
    <h1>{count}</h1>
  </div>
}
const App = () => <Counter />

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
