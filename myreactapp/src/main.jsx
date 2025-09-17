import { createRoot } from "react-dom/client"

import { RootLayout } from "./layouts/layout"


const App = () => {
    return <>
        <RootLayout />
    </>
}

createRoot(document.getElementById('root')).render(<App />)

