import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import './index.css'
import { store } from './redux/store'

const container = document.getElementById('root')

if (!container) {
    throw new Error('Root element was not found in your document.')
}

const root = createRoot(container)

root.render(
    <Provider store={store}>
        <App />
    </Provider>
)
