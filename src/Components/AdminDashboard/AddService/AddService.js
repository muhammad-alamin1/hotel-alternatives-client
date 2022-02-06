import './addservice.css';
import React from 'react';
import Admin from '../Admin/Admin';

export default function AddService() {
  return <div className="d-flex">
      <Admin />
      <div id="add-service">
          <form action="/dashboard/admin/addservice/" method="post">
            <input className="form-control" type="text" name="address" placeholder="address" required /> <br/>
            <input className="form-control" type="text" name="description" placeholder="description" required /> <br/>
            <input className="form-control" type="number" name="price" placeholder="price" required /> <br/>
            <input className="form-control" type="file" name="file" required /> <br/>
            <input type="submit" value="Submit" />
          </form>
      </div>
  </div>;
}
