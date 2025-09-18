import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// const styles = { fontWeight: 'bold', fontSize: 80, color: 'blue' }
const styles = {
    header: {
        fontWeight: 'bold', fontSize: 80, color: 'blue'
    },
    container: {
        backgroundColor: 'yellow'
    }
}

const Header = () => {
    return <div className="m-40" style={styles.container}>
        <h1 style={{ fontWeight: 'bold', fontSize: 80, color: 'blue' }}>Hello</h1>
        <h1 style={styles.header}>Hello</h1>

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
