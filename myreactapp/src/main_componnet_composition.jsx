import { createRoot } from "react-dom/client"

const Hai = () => {
    return <h1>Hai</h1>
}
const Hello = () => {
    return <h1>Hello</h1>
}
const Greet = () => {
    return <h1>Greet</h1>
}
// compose components
const Welcome = () => {
    return <div>
        <Hello />
        <Hai />
        <Greet />
    </div>
}


createRoot(document.getElementById('root')).render(<Welcome />)

