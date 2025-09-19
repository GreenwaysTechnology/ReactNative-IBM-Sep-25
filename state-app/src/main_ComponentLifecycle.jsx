import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'

class Parent extends React.Component {

    state = {
        count: 0
    }
    constructor() {
        super()
        console.log('Parent Constructor called')
    }

    componentDidMount() {
        console.log('Parent componentDidMount is called')
    }
    componentDidUpdate() {
        console.log('Parent componentDidUpdate is called')
    }

    render() {
        console.log('Parent Render')
        return <div>
            <h1>Parent Component</h1>
            <button onClick={() => {
                this.setState(({ ...this.state.count, count: this.state.count + 1 }))
            }}>{this.state.count}</button>
            <Child />
        </div>
    }
}

class Child extends React.Component {

    constructor() {
        super()
        console.log('Child Constructor called')
    }
    componentDidMount() {
        console.log('Child componentDidMount is called')
    }
    componentDidUpdate() {
        console.log('Child componentDidUpdate is called')
    }
    render() {
        console.log('Child Render')
        return <div>
            <h1>Child Component</h1>
        </div>
    }
}


const App = () => {
    return <>
        <Parent />
    </>
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
