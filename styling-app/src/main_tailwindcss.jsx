import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

const Header = () => {
  return <div className="flex items-center justify-center bg-red-100">
    <h1 className="font-bold text-4xl text-blue-600">IBM</h1>
  </div>
}


const App = () => {
  return <>
    <Header />
  </>
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
