import './userdashboard.css';
import React from 'react';
import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent, SubMenu, MenuItem } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Menu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import Review from '../Review/UserReview';
import user from '../../../images/google.png';

export default function UserDashboard() {
  return <div>
      <ProSidebar>
        <Menu iconShape="square">
            <SidebarHeader>
                <MenuItem><h4>Hotel Alternatives</h4></MenuItem>
            </SidebarHeader>
            <SidebarContent>
                <MenuItem>Book</MenuItem>
                <MenuItem>Booking List</MenuItem>
                <MenuItem>Review
                    <Link to="/dashboard/user/review" element={<Review />} />
                </MenuItem>
            </SidebarContent>
            <SidebarFooter>
                <h6><strong>Muhammad</strong></h6>
                <MenuItem>Home Page
                    <Link to="/" />
                </MenuItem>
                <MenuItem>About Us</MenuItem>
                <MenuItem>Project</MenuItem>
                <MenuItem>Contact</MenuItem>
                <MenuItem>New User</MenuItem>
                <MenuItem>Blogs</MenuItem>
                <MenuItem>Partnerships</MenuItem>
                <MenuItem>Privacy Policy</MenuItem>
                <MenuItem>FAQ</MenuItem>
                <MenuItem>Settings</MenuItem>
                <MenuItem>Logout</MenuItem>
            </SidebarFooter>
        </Menu>
    </ProSidebar>
  </div>;
}
