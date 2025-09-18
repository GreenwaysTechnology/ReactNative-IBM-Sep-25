import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

const List = ({ names }) => {

  return <ul>
    {
      names.map((name, index) => {
        return <li key={index}>{name}</li>
      })
    }
  </ul>

}

const App = () => {
  const names = ['Subramanian', 'Murugan', 'John', 'Marry']
  return <>
    <List names={names} />
  </>
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
