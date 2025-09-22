import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import Counter from './counter/counter'
import appStore from './store'

const App = () => <Provider store={appStore}>
    <Counter />
</Provider>

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>,
)
