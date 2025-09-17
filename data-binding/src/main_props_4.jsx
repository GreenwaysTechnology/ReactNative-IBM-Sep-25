import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// const User = ({ id, firstName, lastName, status, address: { city },profilePic }) => <div>
//     <h1>id : {id}</h1>
//     <img src={profilePic} height={100} width={100}  alt='Photo of Hedy'/>
//     <h2>Name : {firstName} {lastName}</h2>
//     <h3>Status : {status ? "Available" : "Not Available"}</h3>
//     <h2>City : {city}</h2>
// </div>
//break down the component as much as possible

const Avatar = ({ imgUrl }) => <img src={imgUrl} height={100} width={100} alt='Photo of Hedy' />
const Address = ({ city }) => <address>
    <h2>{city}</h2>
</address>

const User = ({ id, firstName, lastName, status, address: { city }, profilePic }) => <div>
    <h1>id : {id}</h1>
    <Avatar imgUrl={profilePic} />
    <h2>Name : {firstName} {lastName}</h2>
    <h3>Status : {status ? "Available" : "Not Available"}</h3>
    <Address city={city} />
</div>

const App = () => {
    const imgUrl = 'https://imgur.com/1bX5QH6.jpg'
    return <>
        <User id={1} firstName={'Lady'}
            profilePic={imgUrl}
            lastName={'Hedy'} status={true}
            address={{ city: 'Coimbtore' }} />

    </>
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
