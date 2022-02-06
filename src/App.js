import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import './App.css';
import AddService from "./Components/AdminDashboard/AddService/AddService";
import Admin from "./Components/AdminDashboard/Admin/Admin";
import AllOrder from "./Components/AdminDashboard/AllOrder/AllOrder";
import MakeAdmin from "./Components/AdminDashboard/MakeAdmin/MakeAdmin";
import ManageServices from "./Components/AdminDashboard/ManageServices/ManageServices";
import ProductUpdate from "./Components/AdminDashboard/ProductUpdate/ProductUpdate";
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
                <Route path='/user/register/' element={<Register />} />
                <Route path='/user/login/' element={<Login />} />
                <Route path='/dashboard/user/' element={<UserDashboard />} />
                <Route path='/dashboard/user/review/' element={<Review />} /> 
                <Route path='/dashboard/admin/' element={<Admin />}/> 
                <Route path='/dashboard/admin/orders/' element={<AllOrder />} /> 
                <Route path='/dashboard/admin/addservice/' element={<AddService />} /> 
                <Route path='/dashboard/admin/addadmin/' element={<MakeAdmin />} />
                <Route path='/dashboard/admin/manageservice/' element={<ManageServices />} />
                <Route path='/dashboard/admin/manageservice/update/:homeId' element={<ProductUpdate />} />
                <Route path='/' element={<Home />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;