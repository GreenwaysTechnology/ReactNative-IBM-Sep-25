import { Footer } from "./footer"
import { Header } from "./header"
import { Page } from "./page"

export function RootLayout() {
    return <div>
        {/* Header */}
        <Header />
        {/* Page */}
        <Page />
        {/* Footer */}
        <Footer />
    </div>
}