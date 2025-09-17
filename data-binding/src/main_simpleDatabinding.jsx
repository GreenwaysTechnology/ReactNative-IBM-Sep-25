import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

function User() {
  const id = 1
  const firstName = 'Subramanian'
  const lastName = 'Murugan'
  const status = true
  const address = {
    city: 'Coimbatore'
  }
  return <div>
    <h1>id : {id}</h1>
    <h2>Name : {firstName} {lastName}</h2>
    <h3>Status : {status ? "Available" : "Not Available"}</h3>
    <h2>City : {address.city}</h2>
  </div>
}

const App = () => {
  return <>
    <User />
  </>
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
