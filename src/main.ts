import './index.css'

const container = document.getElementById('root')

if (!container) {
    throw new Error('Root element was not found in your document.')
}

const h1 = document.createElement('h1')
h1.textContent = 'Hello World!'

container.appendChild(h1)
