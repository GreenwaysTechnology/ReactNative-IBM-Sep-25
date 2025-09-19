import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


const Counter = () => {
    const [counter, setCounter] = useState({ increment: 0, decrement: 100 })

    return <div>
        <h1>Increment: {counter.increment} Decrement: {counter.decrement}</h1>
        <button onClick={() => {
            // setCounter(prevState => {
            //     return {
            //         ...prevState, increment: prevState.increment + 1
            //     }
            // })
            // setCounter(prevState => ({
            //     ...prevState, increment: prevState.increment + 1
            // }))
            setCounter(({
                ...counter, increment: counter.increment + 1
            }))

        }}>+</button>
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
