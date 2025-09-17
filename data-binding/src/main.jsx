import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// const User = (props) => <div>
//     {/* Forward the entire properties into another component */}
//     <UserDetails
//         id={props.id}
//         userName={props.userName}
//         email={props.email}
//         address={props.address}
//         status={props.status}
//     />
// </div>

const User = props => <div>
    {/* Forward the entire properties into another component using spread Notation */}
    <UserDetails {...props}  title='User Management'   />
</div>

const UserDetails = props => {
    console.log(props)
    return <div>
        <h1>{props.title}</h1>
        <h3>Id : {props.id}</h3>
        <h3>Name : {props.userName}</h3>
        <h4>Email : {props.email}</h4>
        <h4>City : {props.address.city}</h4>
        <h4>Status : {props.status ? "Available" : "Not Available"}</h4>
    </div>
}
const App = () => {
    return <>
        <User id={1} email='subu@gmail.com' userName='Subramanian Murugan' address={{ city: 'Coimbatore' }} status={true} />
    </>
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
