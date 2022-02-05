import './makeadmin.css';
import React from 'react';
import Admin from '../Admin/Admin';

export default function MakeAdmin() {
  return <div className="d-flex">
      <Admin />
      <div id="make-admin">
          this is make admin page
      </div>
  </div>;
}
