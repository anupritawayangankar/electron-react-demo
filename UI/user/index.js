import React from 'react'
import { Link } from 'react-router';
import Sidebar from '../common/sidebar'

var Button = require('react-bootstrap').Button;
var Modal = require('react-bootstrap').Modal;

var UserUI = React.createClass({

  getInitialState: function () {
    return {
      entries: [],
      showModal: false
    };
  },
  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },


  editClick: function () {
    alert('Hello Anu');
  },
  componentDidMount() {
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/posts',
      method: 'GET',
      dataType: 'json',
      cache: false,
      success: function (data) {
        this.setState({ entries: data });

        var dataSet = [];
        var status = "";

        /* Loop to create Array of Array to bind Table */
        for (var i = 0; i < data.length-1; i++)
          dataSet.push([data[i].id, data[i].title, "<a class='editUser' id='" + data[i].id + "' onClick={this.showModal}>Edit</a>"])

        $('#tblList').DataTable({
          destroy: true,
          data: dataSet,
          columns: [
            { title: "ID" },
            { title: "Title" },
            { title: "" }
          ]
          , "pageLength": 10,
          "oLanguage": {
            "sLengthMenu": 'Display <select class="form-control">' +
            '<option value="10">10</option>' +
            '<option value="15">15</option>' +
            '<option value="20">20</option>' +
            '</select> records'
          }
        });
         
        console.log('success');
      }.bind(this),
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
        console.log('fail');
      }.bind(this)
    });
  },
  render() {
    const { userName, password } = this.props.params
    var rows = [];
    this.state.entries.forEach(function (item) {
      rows.push(<tr key={item.id}><td>{item.id}</td><td>{item.title}</td><td><Link> Edit </Link></td></tr>);
    });

    return (<div id="wrapper">
      <Modal show={this.state.showModal} onHide={this.close}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Text in a modal</h4>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.close}>Close</Button>
        </Modal.Footer>
      </Modal>      
      <Sidebar userName={userName}></Sidebar>
      <div id="page-wrapper">
        <div className="row">
          <div className="panel panel-default margin-top-15">
            <div className="panel-heading">
              <div className="panel-body no-padding">
                <div className="pull-left">
                  <h3 className="no-margin padding-top-5">User List</h3>
                </div>
                <div className="pull-right">
                  <Button
                    bsStyle="primary"
                    bsSize="large"
                    onClick={this.open}>
                    Create
                  </Button>
                </div>
              </div>
            </div>
            <div className="panel-body">
              <table id="tblList" width="100%"
                className="table table-striped table-bordered table-hover dataTable no-footer dtr-inline"
                role="grid">
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>);
  }
})

export default UserUI;