import React from 'react';
import { Link } from 'react-router'
var TabRegister = React.createClass({
  render: function () {
    return (
    <section>
      <div className="container">
        <div className="padding-top-45">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <div className="panel panel-login">
                <div className="panel-heading">
                  <ul className="row">
                    <li className="col-xs-6">
                      <Link activeClassName="active" to="/login">Login</Link>
                    </li>
                    <li className="col-xs-6">
                      <Link activeClassName="active" to="/register">Register</Link>
                    </li>
                  </ul>
                </div>
                <div className="panel-body">
                  <div className="row">
                    <div className="col-lg-12">
                      <form id="userRegForm" data-show="registeration-form">
                        <div className="form-group">
                          <input type="text" name="username" id="username" className="form-control"
                                 placeholder="Username" value="" />
                        </div>
                        <div className="form-group">
                          <input type="password" name="password" id="password" className="form-control"
                                 placeholder="Password"  />
                        </div>
                        <div className="form-group">
                          <input type="password" name="confirmPassword" id="confirmPassword"
                                 className="form-control" placeholder="Confirm Password" />
                        </div>
                        <div className="form-group">
                          <input type="email" name="email" id="email" className="form-control"
                                 placeholder="Email Address" value="" />
                        </div>
                        <div className="form-group">
                          <input type="text" name="contactNo" id="contactNo" className="form-control"
                                 placeholder="Contact No." value="" />
                        </div>
                        <div className="form-group">
                          <div className="col-md-9 col-md-offset-3">
                            <div id="messages"></div>
                          </div>
                        </div>
                        <div className="form-group">
                          <div className="row">
                            <div className="col-sm-6 col-sm-offset-3">
                              <input type="submit" name="register-submit" id="register-submit"
                                     className="form-control btn btn-register" value="Register Now" />
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    )
  }
});


export default TabRegister;