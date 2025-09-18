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
        //you have to write pure function so that react automatically updates
        //react provides inbuilt pure functio through which we can mutate state
        //prevState is just variable points this.state only
        this.setState((prevState) => {
            //return immutable object
            //way 1
            // return {
            //     like: prevState.like + 1
            // }
            //way -2
            // return Object.assign({}, prevState, { like: prevState.like + 1 })
            //way -3 
            return { ...prevState, like: prevState.like + 1 }
        })
        //after returning new state, react engine internally invokes render, so that ui 
        //is updated

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
