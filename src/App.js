import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import './App.css';
import Home from './Components/HomePage/Home/Home';
import Login from "./Components/Login/Login";
import NotFound from "./Components/NotFound/NotFound";
import Register from "./Components/Register/Register";
import Review from "./Components/UserDashboard/Review/UserReview";
import UserDashboard from "./Components/UserDashboard/UserDashboard/UserDashboard";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/user/register' element={<Register />} />
                <Route path='/user/login' element={<Login />} />
                <Route path='/dashboard/user/' element={<UserDashboard />} />
                <Route path='/dashboard/user/review' element={<Review />} /> 
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;