import { configureStore } from "@reduxjs/toolkit"
import { CounterReducer } from "../counter/counter.reducer"

const appStore = configureStore({
    reducer: {
        counter: CounterReducer
    }
})
export default appStore