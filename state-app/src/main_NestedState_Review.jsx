import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'

class Review extends React.Component {
    state = {
        house: {
            name: 'Raven Claw',
            points: 10
        }
    }
    onLike = () => {
        this.setState((prevState) => {
            return {
                ...prevState,  //copy all outter properites
                house: {
                    ...prevState.house, //copy all house properties 
                    points: prevState.house.points + 2
                }
            }
        })
    }
    render() {
        return <div>
            <h1>House Review App</h1>
            <h2>{this.state.house.name}</h2>
            <h2>Points : {this.state.house.points}</h2>
            <button onClick={this.onLike}>Like</button>
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
