import { createRoot } from "react-dom/client"
import React from "react"

class Heading extends React.Component {

    render() {
        return <h1>Hello React</h1>
    }
}


createRoot(document.getElementById('root')).render(<Heading />)

