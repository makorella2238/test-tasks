import {BrowserRouter, Route, Routes} from "react-router-dom"
import TestPage from './pages/TestPage';
import ResultsPage from './pages/ResultsPage';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <TestPage/> }/>
                <Route path="results" element={ <ResultsPage/> }/>
            </Routes>
        </BrowserRouter>
    )
}

export default App