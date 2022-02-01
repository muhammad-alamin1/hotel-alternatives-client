import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import './App.css';
import Home from './Components/HomePage/Home/Home';
import NotFound from "./Components/NotFound/NotFound";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;