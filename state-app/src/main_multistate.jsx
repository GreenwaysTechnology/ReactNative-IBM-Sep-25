import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'

class Review extends React.Component {
    state = {
        like: 0,
        dislike: 0
    }
    onLike = () => {
        this.setState(({ ...this.state, like: this.state.like + 1 }))
    }
    onDislike = () => {
        this.setState(({ ...this.state, dislike: this.state.dislike + 1 }))
    }

    render() {
        console.log('state inside Render : ', this.state)
        return <div>
            <h1>Review App</h1>
            <h2>Like : {this.state.like} Dislike:{this.state.dislike}</h2>
            <button onClick={this.onLike}>Like</button>
            <button onClick={this.onDislike}>Dislike</button>
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
