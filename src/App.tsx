import './App.css'
import config from './config/config'
import logo from './logo.svg'
import { Quotes } from './features/quotes/presentation/Quotes'

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>{`${config.app.name} v${config.app.version}`}</h2>
                <p>Environment: {config.environment}</p>
            </header>
            <main>
                <Quotes />
            </main>
        </div>
    )
}

export default App
