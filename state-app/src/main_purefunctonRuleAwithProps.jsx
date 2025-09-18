import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

//function which accepts input (object-props)
//Yes this function is pure 
// const Welcome = props => {
//      return <div>
//         <h1>{props.message}</h1>
//     </div>
// }

//this is impure function: react never allow to change the props
const Welcome = props => {
    //modify the input parameter
    props.message = 'hai'
    return <div>
        <h1>{props.message}</h1>
    </div>
}


const App = () => {
    return <>
        <Welcome message='hello' />
    </>
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
