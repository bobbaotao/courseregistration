import React, { Component } from 'react';
import './App.css';
var WebStorage = require('react-webstorage');

class Summary extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    var tableContent = null;
    var webStorage = new WebStorage(window.localStorage || window.sessionStorage);
    var courses = JSON.parse(webStorage.getItem(this.props.webstorage));
    if(courses != null) {
      tableContent = courses.map((state) => (
        <tr>
          <td>{state.name}</td>
          <td>{state.gender}</td>
          <td>{state.contentNumber}</td>
          <td>{state.trainingMode}</td>
          <td>{state.courseOffered}</td>
        </tr>
      ) );
    }

      return (
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>Gender</td>
              <td>Number</td>
              <td>Traning Mode</td>
              <td>Course</td>
            </tr>
            {tableContent}
          </tbody>
        </table>
      );
  }
}

export default Summary;
