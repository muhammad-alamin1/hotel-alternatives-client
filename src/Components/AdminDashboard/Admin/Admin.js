import './admin.css';
import React from 'react';
import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent, SubMenu, MenuItem, Menu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

export default function Admin() {
  return <div>
      <ProSidebar>
        <Menu iconShape="">
            <SidebarHeader>
                <MenuItem><h4>Hotel Alternatives</h4></MenuItem>
                <div style={{marginLeft: '65px'}}><strong><i>Muhammad</i></strong></div> <br/>
            </SidebarHeader>
            <SidebarContent>
                <MenuItem>Order list
                    <Link to="/dashboard/admin/orders/" />
                </MenuItem>
                <MenuItem>Add Service
                    <Link to="/dashboard/admin/addservice/" />
                </MenuItem>
                <MenuItem>Make admin
                    <Link to="/dashboard/admin/addadmin/" />
                </MenuItem>
                <MenuItem>Manage Services</MenuItem>
            </SidebarContent>
        </Menu>
      </ProSidebar>
  </div>;
}
