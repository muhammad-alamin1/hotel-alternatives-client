import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import './App.css';
import Home from './Components/HomePage/Home/Home';
import NotFound from "./Components/NotFound/NotFound";
import Register from "./Components/Register/Register";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/user/register' element={<Register />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;