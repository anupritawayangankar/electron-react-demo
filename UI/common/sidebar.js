import React from 'react'

var sidebar =  React.createClass({
  render() {

    return (<nav className="navbar navbar-default navbar-fixed-top" role="navigation" style={{ marginBottom: 0 }}>
      <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="#">Welcome {this.props.userName}</a>
      </div>
      <ul className="nav navbar-top-links navbar-right">

        <li className="dropdown">
          <a className="dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false">
            <i className="fa fa-user fa-fw"></i><i className="fa fa-caret-down"></i>
          </a>
          <ul className="dropdown-menu dropdown-user">
            <li><a><i className="fa fa-sign-out fa-fw"></i>Logout</a>
            </li>
          </ul>
        </li>
      </ul>
      <div className="navbar-default sidebar" role="navigation">
        <div className="sidebar-nav navbar-collapse">
          <ul className="nav in" id="side-menu">
            <li>
              <a href="#" id="hypGame" className="active">Link1</a>
            </li>
            <li>
              <a href="#" id="hypLeague">Link2</a>
            </li>
            <li>
              <a href="#" id="hypTeam">Link3</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>)
  }
});

export default sidebar;