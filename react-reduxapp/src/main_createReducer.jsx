import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { configureStore, createReducer } from '@reduxjs/toolkit'
import { Provider, useDispatch, useSelector } from 'react-redux'

// const CounterReducer = (counter = { value: 10 }, action) => {
//     //methods
//     switch (action.type) {
//         case 'counter/increment':
//             //immutable logic
//             return { ...counter, value: counter.value + 1 }
//         case 'counter/decrement':
//             return { ...counter, value: counter.value - 1 }
//         case 'counter/incrementBy':
//             return { ...counter, value: counter.value + action.payload }
//         default:
//             //default state
//             return counter;
//     }
// }

const initialState = {
    value: 0
}
const CounterReducer = createReducer(initialState, builder => {
    //biz logic
    builder
        .addCase('counter/increment', (state, action) => {
            //immutable code using immer logic
            state.value += 1
        })
        .addCase('counter/decrement', (state, action) => {
            state.value -= 1
        })
        .addCase('counter/incrementBy', (state, action) => {
            state.value += action.payload
        })
        .addDefaultCase((state, action) => { })
})

//create store object
const appStore = configureStore({
    reducer: {
        counter: CounterReducer
    }
})
///////////////////////////////////////////////////////////////////////////////////////
//React component layer
const Counter = (props) => {
    const counter = useSelector(state => {
        //appState.reducerName
        return state.counter
    })

    const dispatch = useDispatch()

    const onIncrement = () => {
        //action object
        const incrementAction = {
            type: 'counter/increment'
        }
        //dispatch an action to reducer
        dispatch(incrementAction)
    }
    return <div>
        <h1>React Redux</h1>
        <h2>Counter {counter.value}</h2>
        <button onClick={onIncrement}>+</button>
        <button onClick={() => {
            dispatch({ type: 'counter/decrement' })
        }}>-</button>
        <button onClick={() => {
            dispatch({ type: 'counter/incrementBy', payload: 2 })
        }}>IncrementBy</button>

    </div>
}

const App = () => {
    return <Provider store={appStore}>
        {/* Your components */}
        <Counter />
    </Provider>
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
