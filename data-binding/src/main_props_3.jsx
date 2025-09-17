import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// function User(props) {
//     const { id, firstName, lastName, status, address: { city } } = props
//     return <div>
//         <h1>id : {id}</h1>
//         <h2>Name : {firstName} {lastName}</h2>
//         <h3>Status : {status ? "Available" : "Not Available"}</h3>
//         <h2>City : {city}</h2>
//     </div>
// }
// function User({ id, firstName, lastName, status, address: { city } }) {
//     return <div>
//         <h1>id : {id}</h1>
//         <h2>Name : {firstName} {lastName}</h2>
//         <h3>Status : {status ? "Available" : "Not Available"}</h3>
//         <h2>City : {city}</h2>
//     </div>
// // }
// const User = ({ id, firstName, lastName, status, address: { city } }) => {
//     return <div>
//         <h1>id : {id}</h1>
//         <h2>Name : {firstName} {lastName}</h2>
//         <h3>Status : {status ? "Available" : "Not Available"}</h3>
//         <h2>City : {city}</h2>
//     </div>
// }

// }
const User = ({ id, firstName, lastName, status, address: { city } }) => <div>
    <h1>id : {id}</h1>
    <h2>Name : {firstName} {lastName}</h2>
    <h3>Status : {status ? "Available" : "Not Available"}</h3>
    <h2>City : {city}</h2>
</div>


const App = () => {
    return <>
        <User id={1} firstName={'Subramanian'}
            lastName={'Murugan'} status={true}
            address={{ city: 'Coimbtore' }} />
        <User id={2} firstName={'Ram'}
            lastName={'Murugan'} status={true}
            address={{ city: 'Coimbtore' }} />
    </>
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
