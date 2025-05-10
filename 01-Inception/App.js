// React js

const element = document.createElement('h2')

element.innerHTML = 'Hello world using JAVASCRIPT'

const root = document.querySelector('#root')
root.appendChild(element)

const reactElement = React.createElement('h1', {}, 'Hello world form react')

const classRoot = ReactDOM.createRoot(document. getElementById("class-root")); 

classRoot.render(reactElement)