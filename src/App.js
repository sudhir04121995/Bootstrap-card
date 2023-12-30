

import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='card bg-primary'>
    <div className='container-fluid py-5'>
      <div className='row justify-content-around'>
        <div className='col-lg-4 mb-4'>
          <div className='card bg-white p-5 rounded shadow'>
           <h1 className="h6  font-weight-bold mb-4 text-center text-muted">
            FREE
            </h1>
            <h2 className="h1 font-weight-bold text-center">$0/month</h2>
            <hr className="my-4 w-100 mx-auto bg-primary" />
            <ul className="list-unstyled my-2 text-small text-left">
              <li className="mb-2">
                <i className="fa fa-check mr-2 text-secondary"></i>
                <span className="ms-2">Single User</span>
              </li>
              <li className="mb-2">
                <i className="fa fa-check mr-2 text-secondary"></i>
                <span className="ms-2">50GB Storage</span>
              </li>
              <li className="mb-2">
                <i className="fa fa-check mr-2 text-secondary"></i>
                <span className="ms-2">Unlimited Public Project</span>
              </li>
              <li className="mb-2">
                <i className="fa fa-check mr-2 text-secondary"></i>{" "}
                <span className="ms-2">Community Access</span>
              </li>
              <li className="mb-1 text-muted">
                <i className="fa fa-times mr-2 "></i>
                <span className="ms-2">Unlimited Private Project</span>
              </li>
              <li className="mb-1 text-muted">
                <i className="fa fa-times mr-2 "></i>
                <span className="ms-2">Dedicated Phone Support</span>
              </li>
              <li className="mb-2 text-muted">
                <i className="fa fa-times mr-2 "></i>
                <span className="ms-2">Free Subdomain</span>
              </li>{" "}
              <li className="mb-2 text-muted">
                <i className="fa fa-times mr-2 "></i>
                <span className="ms-2">Monthly Status Report</span>
              </li>
            </ul>
            <div className="col-12 text-center">
              <button className="btn btn-primary btn-block p-2 shadow rounded-pill w-100">
                Button
              </button>
            </div>
          </div>
          </div>
     

        <div className='col-lg-4 mb-4'>
          <div className='card bg-white p-5 rounded shadow'>
          <h1 className="h6  font-weight-bold mb-4 text-center text-muted">
           PLUS
            </h1>
            <h2 className="h1 font-weight-bold text-center">$9/month</h2>
            <hr className="my-4 w-100 mx-auto bg-primary" />
            <ul className="list-unstyled my-2 text-small text-left">
              <li className="mb-2">
                <i className="fa fa-check mr-2 text-secondary"></i>
                <span className="ms-2">5 User</span>
              </li>
              <li className="mb-2">
                <i className="fa fa-check mr-2 text-secondary"></i>
                <span className="ms-2">50GB Storage</span>
              </li>
              <li className="mb-2">
                <i className="fa fa-check mr-2 text-secondary"></i>
                <span className="ms-2">Unlimited Public Project</span>
              </li>
              <li className="mb-2">
                <i className="fa fa-check mr-2 text-secondary"></i>{" "}
                <span className="ms-2">Community Access</span>
              </li>
              <li className="mb-1 text-muted">
                <i className="fa fa-check mr-2 text-secondary "></i>
                <span className="ms-2">Unlimited Private Project</span>
              </li>
              <li className="mb-1 text-muted">
                <i className="fa fa-check mr-2 text-secondary "></i>
                <span className="ms-2">Dedicated Phone Support</span>
              </li>
              <li className="mb-2 text-muted">
                <i className="fa fa-check mr-2 text-secondary "></i>
                <span className="ms-2">Free Subdomain</span>
              </li>{" "}
              <li className="mb-2 text-muted">
                <i className="fa fa-times mr-2 "></i>
                <span className="ms-2">Monthly Status Report</span>
              </li>
            </ul>
            <div className="col-12 text-center">
              <button className="btn btn-primary btn-block p-2 shadow rounded-pill w-100">
                Button
              </button>
            </div>
          </div>
          </div>
       

        <div className='col-lg-4 mb-4'>
          <div className='card bg-white p-5 rounded shadow'>
          <h1 className="h6  font-weight-bold mb-4 text-center text-muted">
             PRO
            </h1>
            <h2 className="h1 font-weight-bold text-center">$49/month</h2>
            <hr className="my-4 w-100 mx-auto bg-primary" />
            <ul className="list-unstyled my-2 text-small text-left">
              <li className="mb-2">
                <i className="fa fa-check mr-2 text-secondary"></i>
                <span className="ms-2">Unlimited User</span>
              </li>
              <li className="mb-2">
                <i className="fa fa-check mr-2 text-secondary"></i>
                <span className="ms-2">50GB Storage</span>
              </li>
              <li className="mb-2">
                <i className="fa fa-check mr-2 text-secondary"></i>
                <span className="ms-2">Unlimited Public Project</span>
              </li>
              <li className="mb-2">
                <i className="fa fa-check mr-2 text-secondary"></i>{" "}
                <span className="ms-2">Community Access</span>
              </li>
              <li className="mb-1 text-muted">
                <i className="fa fa-check mr-2 text-secondary "></i>
                <span className="ms-2">Unlimited Private Project</span>
              </li>
              <li className="mb-1 text-muted">
                <i className="fa fa-check mr-2 text-secondary "></i>
                <span className="ms-2">Dedicated Phone Support</span>
              </li>
              <li className="mb-2 text-muted">
                <i className="fa fa-check mr-2 text-secondary"></i>
                <span className="ms-2">Free Subdomain</span>
              </li>{" "}
              <li className="mb-2 text-muted">
                <i className="fa fa-check mr-2 text-secondary "></i>
                <span className="ms-2">Monthly Status Report</span>
              </li>
            </ul>
            <div className="col-12 text-center">
              <button className="btn btn-primary btn-block p-2 shadow rounded-pill w-100">
                Button
              </button>
            </div>
          
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;

