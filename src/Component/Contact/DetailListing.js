import React from "react";

import "./contact.css";

function DetailListing(props) {
  // //functional component. displays the specific contact details passed as props to this component
  return (
    <>
      <div className="card col-md-3">
        <div className="row">
          <div className="card-img">
            <img
              className="card-img-top"
              src={"https://avatars.githubusercontent.com/u/1?v=4"}
              alt="git user"
            />
          </div>
          <hr />
          <span className="topTemp">mojombo</span>
        </div>
        <div className="card-body">
          <span className="max">LastName</span>
          <h4 className="card-title">Email</h4>
          <div className="card-text">
            <p className="day">GitHub URL</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailListing;
