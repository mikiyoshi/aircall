import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home(a, b) {
  // const [feed, setFeed] = useState('');

  // useEffect(() => {
  //   fetch('https://aircall-job.herokuapp.com/activities')
  //     .then((res) => res.json())
  //     // this data is Object
  //     .then((data) => {
  //       console.log(data);
  //       // [name, setName] update
  //       setFeed(data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);
  return (
    <div>
      <div
        className="alert alert-light border border-secondary  d-flex justify-content-between"
        role="alert"
      >
        <div>
          <i className="bi bi-telephone-inbound-fill"></i>
        </div>
        <div>
          <strong>
            +33 6 45 13 53 91<span className="badge text-bg-danger">4</span>
          </strong>
          <p>tried to call on Xavier</p>
        </div>
        <div>
          16:30 <span className="badge text-bg-secondary"></span>
        </div>
      </div>
      <div
        className="alert alert-light border border-secondary  d-flex justify-content-between"
        role="alert"
      >
        <div>
          <i className="bi bi-telephone-inbound-fill"></i>
        </div>
        <div>
          <strong>
            +33 6 45 13 53 91<span className="badge text-bg-danger">4</span>
          </strong>
          <p>tried to call on Xavier</p>
        </div>
        <div>
          16:30 <span className="badge text-bg-secondary">PM</span>
        </div>
      </div>
      <div
        className="alert alert-light border border-secondary  d-flex justify-content-between"
        role="alert"
      >
        <div>
          <i className="bi bi-telephone-inbound-fill"></i>
        </div>
        <div>
          <strong>
            +33 6 45 13 53 91<span className="badge text-bg-danger">4</span>
          </strong>
          <p>tried to call on Xavier</p>
        </div>
        <div>
          16:30 <span className="badge text-bg-secondary">PM</span>
        </div>
      </div>
    </div>
  );
}
