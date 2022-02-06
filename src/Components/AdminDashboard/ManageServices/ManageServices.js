import './manageservice.css';
import React from 'react';
import Admin from '../Admin/Admin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


export default function ManageServices() {
  return <div>
      <Admin />
      <table>
          <tr>
            <th>Address</th>
            <th>Description</th>
            <th>Price</th>
            <th>Avatar</th>
            <th>Update</th>
            <th>Delete</th>
        </tr>
        <tr>
            <td>London</td>
            <td>A beautiful place</td>
            <td>BDT 326234</td>
            <td>home</td>
            <td style={{cursor: 'pointer'}}>
                <Link to="/dashboard/admin/manageservice/update/:homeId" >
                <FontAwesomeIcon className="social-link" icon={faEdit} /></Link>
            </td>
            <td style={{cursor: 'pointer'}}><FontAwesomeIcon className="social-link" icon={faTrash} /></td>
        </tr>
    </table>
  </div>;
}
