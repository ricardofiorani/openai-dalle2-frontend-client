import './App.css'

import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Home from "./routes/Home";
import History from "./routes/History";

const App: React.FC = () => {
    return (
        <div>
            <nav className="main-nav">
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/history">History</a>
                    </li>
                </ul>
            </nav>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/history" element={<History/>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default App;