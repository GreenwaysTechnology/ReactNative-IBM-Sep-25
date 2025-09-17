// import React, { Fragment } from "react"
import { createRoot } from "react-dom/client"

// const Heading = () => {
//     return <React.Fragment>
//         <h1>IBM</h1>
//         <p>This is para</p>
//     </React.Fragment>
// }
// const Heading = () => {
//     return <Fragment>
//         <h1>IBM</h1>
//         <p>This is para</p>
//     </Fragment>
// }
const Heading = () => {
    return <>
        <h1>IBM</h1>
        <p>This is para</p>
    </>
}



createRoot(document.getElementById('root')).render(<Heading />)

