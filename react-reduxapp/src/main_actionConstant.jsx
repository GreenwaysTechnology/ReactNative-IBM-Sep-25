import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { configureStore } from '@reduxjs/toolkit'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { produce } from 'immer'

//action constant
const counterincrementAction = 'counter/increment'
const counterdecrementAction = 'counter/decrement'
const counterincrementByAction = 'counter/incrementBy'

const CounterReducer = (counter = { value: 10 }, action) => {
    //methods
    switch (action.type) {
        case counterincrementAction:
            //immutable logic
            return produce(counter, draft => {
                draft.value += 1
            })
        case counterdecrementAction:
            return produce(counter, draft => {
                draft.value -= 1
            })
        case counterincrementByAction:
            return produce(counter, draft => {
                draft.value += action.payload
            })
        default:
            //default state
            return counter;
    }
}

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
            type: counterincrementAction
        }
        //dispatch an action to reducer
        dispatch(incrementAction)
    }
    return <div>
        <h1>React Redux</h1>
        <h2>Counter {counter.value}</h2>
        <button onClick={onIncrement}>+</button>
        <button onClick={() => {
            dispatch({ type: counterdecrementAction })
        }}>-</button>
        <button onClick={() => {
            dispatch({ type: counterincrementByAction, payload: 2 })
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
