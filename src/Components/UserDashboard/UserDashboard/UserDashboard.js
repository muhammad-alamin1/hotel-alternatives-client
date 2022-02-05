import './userdashboard.css';
import React from 'react';
import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent, SubMenu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Menu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import Review from '../Review/UserReview';
import user from '../../../images/google.png';
import Navbar from '../../HomePage/Navbar/Navbar';

export default function UserDashboard() {
  return <div className="" >
      <ProSidebar>
        <Menu iconShape="square">
            <SidebarHeader>
                <MenuItem><h4>Hotel Alternatives</h4></MenuItem>
                <div style={{marginLeft: '65px'}}><strong><i>Muhammad</i></strong></div> <br/>
            </SidebarHeader>
            <SidebarContent>
                <MenuItem>Dashboard
                    <Link to="/dashboard/user/" />
                </MenuItem>
                <MenuItem>Book</MenuItem>
                <MenuItem>Booking List</MenuItem>
                <MenuItem>Review
                    <Link to="/dashboard/user/review" element={<Review />} />
                </MenuItem>
            </SidebarContent>
            <SidebarFooter>
                <MenuItem>Home Page
                    <Link to="/" />
                </MenuItem>
                <MenuItem>About Us</MenuItem>
                <MenuItem>Project</MenuItem>
                <MenuItem>Contact</MenuItem>
                <MenuItem>New User</MenuItem>
                <MenuItem>Blogs</MenuItem>
                <MenuItem>FAQ</MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuItem>Logout</MenuItem>
            </SidebarFooter>
        </Menu>
    </ProSidebar>
  </div>;
}
