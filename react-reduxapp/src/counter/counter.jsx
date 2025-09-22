import { useSelector,useDispatch } from "react-redux"

const Counter = () => {
    //read count from redux
    const count = useSelector(appState => {
        //appState.reducerName
        return appState.counter
    })
    const dispatch = useDispatch()
    const onIncrement = () => {
        //dispatch(actionObject)
        dispatch({
            type: 'counter/increment'
        })
    }
    return <div>
        <h1>Counter Component Value : {count}</h1>
        <button onClick={onIncrement}>+</button>
    </div>
}
export default Counter;