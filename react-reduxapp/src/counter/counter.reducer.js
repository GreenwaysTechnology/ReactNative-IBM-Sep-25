const CounterReducer = (count = 0, action) => {
    //biz logic
    switch (action.type) {
        case 'counter/increment':
            return count + 1
        default:
            return count
    }
}
export { CounterReducer }