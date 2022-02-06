import './makeadmin.css';
import React from 'react';
import Admin from '../Admin/Admin';

export default function MakeAdmin() {
  return <div className="d-flex">
      <Admin />
      <div id="make-admin">
        <form action="" method="post">
          <input className="form-control" type="email" name="email" placeholder="E-mail" required /><br/>
          <input className="form-control" type="password" name="password" placeholder="Password" required /><br/>
          <input type="submit" value="New Admin" />
        </form>
      </div>
  </div>;
}
