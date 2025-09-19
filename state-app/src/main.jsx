import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'

class Review extends React.Component {
    state = {
        like: 0
    }
    onIncrement = () => {
        this.setState((prevState) => {
            return { ...prevState, like: prevState.like + 1 }
        })
    }
    render() {
        return <ReviewDetails {...this.state} onIncrement={this.onIncrement} />
    }
}

//child component to show UI, Where as parent component has state and biz logic
const ReviewDetails = ({ like, onIncrement }) => {
    return <div>
        <h1>Review App</h1>
        <h2>Like : {like}</h2>
        <button onClick={onIncrement}>Like</button>
    </div>
}


const App = () => {
    return <>
        <Review />
    </>
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
