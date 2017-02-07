import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import TabLogin from './entry/login'
import TabRegister from './entry/register'
import AdminUI from './admin/index'
import UserUI from './user/index'

export default React.createClass({
  render: function () {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={TabLogin} />
        <Route path="/login" component={TabLogin}/>
        <Route path="/register" component={TabRegister}/>    
        <Route path="/admin/:userName" component={AdminUI}/> 
        <Route path="/user/:userName" component={UserUI}/> 
      </Router>
    )
  }
});