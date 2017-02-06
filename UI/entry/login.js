import React from 'react';
import { Link } from 'react-router';
var $ = require("jquery");
var baseUrl = 'http://localhost:4000/api/';
var Router = require('react-router');

var TabLogin = React.createClass({
contextTypes: {
    router: React.PropTypes.object
  },
  getInitialState: function () {
    return {
      username: '',
      password:''
    }
  },

submitClick: function (event) {
    
  event.preventDefault()
  const userName = event.target.elements[0].value
  const password = event.target.elements[1].value
  const path = `/user/${userName}/${password}`
  this.context.router.push(path)
                
  },
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
                      <form onSubmit={this.submitClick}>
                        <div className="form-group">
                          <input type="text" name="username" className="form-control"
                                 placeholder="Username" defaultValue='' />
                        </div>
                        <div className="form-group">
                          <input type="password" name="password" className="form-control"
                                 placeholder="Password" />
                        </div>
                        <div className="form-group">
                          <input type="submit" className="form-control btn btn-login" value="Log In" />
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

export default TabLogin;