import React from 'react'
import { Link } from 'react-router';

//class AdminUI extends React.Component{
var ModalHeader = React.createClass({
  render: function () {
    return (
      <div className="modal-header">
        {this.props.title}
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    )
  }
});

var ModalBody = React.createClass({
  render: function () {
    return (
      <div className="modal-body">
        {this.props.content}
      </div>
    )
  }
});

var ModalFooter = React.createClass({
  render: function () {
    return (
      <div className="modal-footer">
        <button type="button" className="btn btn-primary">Submit</button>
      </div>
    )
  }
});

var Modal = React.createClass({
  render: function () {
    return (<div className="modal fade">
        <div className="modal-dialog">
          <div className="modal-content">
            <ModalHeader title="Modal Title"/>
            <ModalBody content = "Modal Content" />
            <ModalFooter />
          </div>
        </div>
      </div>)
  }
});


var AdminUI = React.createClass({
  
  getInitialState: function() {
    return {entries: []};
  },

  editClick: function() {
    alert('Hello Anu');
  },
  componentDidMount() {
        $.ajax({
          url: 'https://jsonplaceholder.typicode.com/posts',
          method: 'GET',
          dataType: 'json',
          cache: false,
          success: function(data) {
            console.log(data);
            this.setState({entries: data});
            console.log('success');
          }.bind(this),
          error: function(xhr, status, err) {
            console.error(this.props.url, status, err.toString());
            console.log('fail');
          }.bind(this)
        });
  },
  render() {    
    /*const { userName, password } = this.props.params
    return ( Test api link ... if u need to use in proj 
    https://jsonplaceholder.typicode.com/
      <div>
        <h2>Welcome {userName}, your passord is : {password}</h2>
      </div>
    )*/

    var rows = [];
      this.state.entries.forEach(function(item){
        rows.push(<tr key={item.id}><td>{item.id}</td><td>{item.title}</td><td><Link> Edit </Link></td></tr>);
      });
      
        return (<table className="table table-bordered table-responsive">
        <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th onClick={this.showModal}></th>
        </tr>
        </thead>
        <tbody>
        {rows}
        </tbody>
      </table>);
  }
})

export default AdminUI;