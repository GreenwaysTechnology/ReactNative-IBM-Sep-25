import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//props just variable which hold single literal object which hosts all object properties

// function User(abc) {
//     return <div>
//         <h1>id : {abc.id}</h1>
//         <h2>Name : {abc.firstName} {abc.lastName}</h2>
//         <h3>Status : {abc.status ? "Available" : "Not Available"}</h3>
//         <h2>City : {abc.address.city}</h2>
//     </div>
// }
function User(props) {
    return <div>
        <h1>id : {props.id}</h1>
        <h2>Name : {props.firstName} {props.lastName}</h2>
        <h3>Status : {props.status ? "Available" : "Not Available"}</h3>
        <h2>City : {props.address.city}</h2>
    </div>
}


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
