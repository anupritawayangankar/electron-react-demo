import React from 'react'
import { Link } from 'react-router';

var sidebar = React.createClass({
  render() {

    const sidebarItems = this.props.sidebarLinks;
    const curretPage = this.props.curretPage;
    const name = this.props.userName;

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

            {sidebarItems.map(function (item, index) {
              if ({item}.item == curretPage) {
                return <li key={index}>
                  <Link className="active" to={`/${item.toLowerCase()}/${name}`}>{item}</Link>
                </li>;
              }
              else {
                return <li key={index}>
                  <Link to={`/${item.toLowerCase()}/${name}`}>{item}</Link>
                </li>;
              }
            })}
          </ul>
        </div>
      </div>
    </nav>)
  }
});

export default sidebar;