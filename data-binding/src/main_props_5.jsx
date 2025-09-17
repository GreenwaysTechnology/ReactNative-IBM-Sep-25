import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { User } from './user/user'

const App = () => {
    const imgUrl = 'https://imgur.com/1bX5QH6.jpg'
    return <>
        <User id={1} firstName={'Lady'}
            profilePic={imgUrl}
            lastName={'Hedy'} status={true}
            address={{ city: 'Coimbtore' }} />

        <User id={2} firstName={'Lady'}
            profilePic={imgUrl}
            lastName={'Hedy'} status={true}
            address={{ city: 'Coimbtore' }} />
        <User id={2} firstName={'Lady'}
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
