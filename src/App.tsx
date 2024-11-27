import './App.css'
import { Qoutes } from './feature/quotes/Qoutes'
import logo from './logo.svg'

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>React & Redux Toolkit</h2>
            </header>
            <main>
                <Qoutes />
            </main>
        </div>
    )
}

export default App
