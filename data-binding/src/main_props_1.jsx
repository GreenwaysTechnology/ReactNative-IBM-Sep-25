import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

function User(id, firstName, lastName, status, address) {
    return <div>
        <h1>id : {id}</h1>
        <h2>Name : {firstName} {lastName}</h2>
        <h3>Status : {status ? "Available" : "Not Available"}</h3>
        <h2>City : {address.city}</h2>
    </div>
}

const App = () => {
    return <>
        {User(1, 'Subramanian', 'Murugan', true, { city: 'Coimbatore' })}
        {User(2, 'Ram', 'Murugan', true, { city: 'Coimbatore' })}
    </>
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
