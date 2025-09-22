import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { configureStore } from '@reduxjs/toolkit'
import { Provider, useDispatch, useSelector } from 'react-redux'

//action constant
const counterIncrementAction = 'counter/increment'
const counterIncrementByAction = 'counter/incrementBy'
const counterDecrementAction = 'counter/decrement'

//reducer-old way
const IncrementReducer = (count = { value: 10 }, action) => {
    //biz logic
    switch (action.type) {
        case counterIncrementAction:
            //immutable logic//pure function
            return { ...count, value: count.value + 1 }
        case counterIncrementByAction:
            //immutable logic//pure function
            return { ...count, value: count.value + action.payload }
        default:
            return count; //default state
    }
}
const DecrementReducer = (count = { value: 10 }, action) => {
    //biz logic
    switch (action.type) {
        case counterDecrementAction:
            //immutable logic//pure function
            return { ...count, value: count.value - 1 }
        default:
            return count; //default state
    }
}
//step 2 store object
export const store = configureStore({
    reducer: {
        //nameofReducer: ReducerFunction
        increment: IncrementReducer,
        decrement: DecrementReducer
    }
})

const Increment = () => {
    const count = useSelector(state => {
        return state.increment
    })
    const dispatch = useDispatch()
    const onIncrement = () => {
        dispatch({ type: counterIncrementAction })
    }
    return <div>
        <h1>Count {count.value}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={() => {
            dispatch({ type: counterIncrementByAction, payload: 2 })
        }}>IncrementByTwo</button>

    </div>
}

const Decrement = () => {
    const count = useSelector(state => {
        return state.decrement
    })
    const dispatch = useDispatch()

    return <div>
        <h1>Count {count.value}</h1>
        <button onClick={() => {
            dispatch({ type: counterDecrementAction })
        }}>-</button>
    </div>
}

const Counter = () => {
    return <>
        <Increment />
        <Decrement />
    </>
}

const App = () => <Provider store={store}>
    <Counter />
</Provider>

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
