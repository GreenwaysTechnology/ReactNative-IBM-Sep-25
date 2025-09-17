import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

const User = ({ id = 0, userName = 'Your Name', email = 'Your email', address: { city = "Your City", state = "Your state" } = {}, status = false }) => <div>
    <h3>Id : {id}</h3>
    <h3>Name : {userName}</h3>
    <h4>Email : {email}</h4>
    <h4>City : {city}</h4>
    <h4>State :{state}</h4>
    <h4>Status : {status ? "Available" : "Not Available"}</h4>
</div>

const App = () => {
    return <>
        <User id={1} email='subu@gmail.com' userName='Subramanian Murugan' address={{ city: 'Coimbatore' }} status={true} />
        <User />
    </>
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
