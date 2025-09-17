import { createRoot } from "react-dom/client"


// const heading = () => {
//     return <div><h1>IBM</h1>
//         <p>This is para</p>
//     </div>
// }
const Heading = () => {
    return <div>
        <h1>IBM</h1>
        <p>This is para</p>
    </div>
}

createRoot(document.getElementById('root')).render(<Heading />)

