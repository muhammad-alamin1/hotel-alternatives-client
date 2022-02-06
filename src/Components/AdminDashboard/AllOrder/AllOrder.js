import './allorder.css';
import React from 'react';
import Admin from '../Admin/Admin';

export default function AllOrder() {
  return <div className="">
      <Admin />
      <table>
          <tr>
              <th>Name</th>
              <th>E-mail</th>
              <th>Phone</th>
              <th>Service</th>
              <th>Date</th>
              <th>Pay With</th>
              <th>Status</th>
          </tr>
          <tr>
              <td>Muhammad Al-amin</td>
              <td>muhammad@gmail.com</td>
              <td>+8801315792303</td>
              <td>Washington</td>
              <td>21-01-2022 to 23-01-2022</td>
              <td>Bkash</td>
              <td>Pending</td>
          </tr>
    </table>
  </div>;
}
