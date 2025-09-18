import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'

class Review extends React.Component {
    state = {
        like: 0
    }
    onIncrement = () => {
        // this.setState((prevState) => {
        //     return { ...prevState, like: prevState.like + 1 }
        // })
        // this.setState((prevState) => ({ ...prevState, like: prevState.like + 1 }))
        this.setState(({ ...this.state, like: this.state.like + 1 }))
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
