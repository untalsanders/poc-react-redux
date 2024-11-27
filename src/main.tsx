import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

const container = document.getElementById('root')

if (!container) {
    throw new Error('Root element was not found in your document.')
}

const root = createRoot(container)

root.render(
    <StrictMode>
        <App />
    </StrictMode>
)
