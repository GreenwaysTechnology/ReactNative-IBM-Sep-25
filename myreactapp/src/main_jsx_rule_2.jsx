import { createRoot } from "react-dom/client"


// const Heading = () => {
//     return <h1>IBM</h1>
//         <p>This is para</p>
    
// }

const Heading = () => {
    return <div><h1>IBM</h1>
        <p>This is para</p>
    </div>
}

// createRoot(document.getElementById('root')).render(<Heading>)
createRoot(document.getElementById('root')).render(<Heading />)

