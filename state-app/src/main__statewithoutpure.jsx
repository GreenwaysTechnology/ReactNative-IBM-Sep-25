import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'

class Review extends React.Component {
    //declare component(Review State)
    state = {
        like: 0
    }
    //listener
    onIncrement = () => {
        this.state.like++
        console.log('state inside listener', this.state)
        this.render()
    }

    render() {
        console.log('state inside Render : ', this.state)
        return <div>
            <h1>Review App</h1>
            <h2>Like : {this.state.like}</h2>
            <button onClick={this.onIncrement}>Like</button>
        </div>
    }
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
