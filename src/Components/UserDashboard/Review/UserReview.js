import './review.css';
import React from 'react';
import UserDashboard from '../UserDashboard/UserDashboard';

export default function Review() {
  return <div className="user-review d-flex" id="user-review">
      <UserDashboard />
      <div id="user-review-main" >
        <div className="d-flex user-review-name" >
          <h5>Review</h5>
          <h6 style={{marginLeft: '800px'}}><strong><i>Muhammad</i></strong></h6>
        </div>
        <div id="review-form">
          <form action="/dashboard/user/review" method="post">
            <input className="form-control" type="text" name="name" placeholder="name" required /> <br />
            <textarea className="form-control" rows="10"  name="description" placeholder="description"style={{resize: 'none'}} required ></textarea><br/>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
  </div>;
}
