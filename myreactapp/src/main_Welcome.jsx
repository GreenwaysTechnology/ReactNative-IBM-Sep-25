import { createRoot } from "react-dom/client"
import { Hai } from "./greeter/Hai"
import { Hello } from "./greeter/Hello"
import { Greet } from "./greeter/Greeter"
// compose components
const Welcome = () => {
    return <div>
        <Hello />
        <Hai />
        <Greet />
    </div>
}

const App =()=>{
    return <Welcome/>
}

createRoot(document.getElementById('root')).render(<App />)

