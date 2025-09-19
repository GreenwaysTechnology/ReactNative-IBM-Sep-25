import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


const Counter = () => {
    const [increment, setIncrement] = useState(1)
    const [decrement, setDecrement] = useState(100)

    return <div>
        <h1>Increment: {increment} Decrement: {decrement}</h1>
        <button onClick={() => { setIncrement(increment + 1) }}>+</button>
        <button onClick={() => { setDecrement(decrement - 1) }}>-</button>

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
