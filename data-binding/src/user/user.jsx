import { Address } from "./address"
import { Avatar } from './avatar'

const User = ({ id, firstName, lastName, status, address: { city }, profilePic }) => <div>
    <h1>id : {id}</h1>
    <Avatar imgUrl={profilePic} />
    <h2>Name : {firstName} {lastName}</h2>
    <h3>Status : {status ? "Available" : "Not Available"}</h3>
    <Address city={city} />
</div>

export { User }