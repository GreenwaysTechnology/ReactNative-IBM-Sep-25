function createNode() {
    const Heading = document.createElement('h1')
    Heading.innerHTML = 'Hello React'
    const rootElement = document.getElementById('root')
    rootElement.appendChild(Heading)
}
createNode()