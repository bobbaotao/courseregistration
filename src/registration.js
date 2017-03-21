import React, { Component } from 'react';
import './App.css';
var WebStorage = require('react-webstorage');

class Registration extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      gender: 'Male',
      contentNumber: '',
      trainingMode: '',
      courseOffered: ''
    };

    this.setName = this.setName.bind(this);
    this.setGender = this.setGender.bind(this);
    this.setNumber = this.setNumber.bind(this);
    this.setTraningMode = this.setTraningMode.bind(this);
    this.setCourseOffered = this.setCourseOffered.bind(this);
    this.SubmitCourse = this.SubmitCourse.bind(this);
  }

  setName(event) {
    //console.log(event.target.value);
    this.setState({ name: event.target.value});
  }

  setGender(event) {
    //console.log(event.target.value);
    this.setState({ gender: event.target.value});
  }

  setNumber(event) {
    //console.log(event.target.value);
    this.setState({ contentNumber: event.target.value});
  }

  setTraningMode(event){
      //console.log(event.target.value);
      this.setState({
        trainingMode: event.target.value,
        courseOffered: ''
      });
    }

  setCourseOffered(event){
    //console.log(event.target.value);
    this.setState({
      courseOffered: event.target.value
    });
  }

  SubmitCourse(){
    var webStorage = new WebStorage(window.localStorage || window.sessionStorage);
    var courses = JSON.parse(webStorage.getItem(this.props.webstorage));
    if(courses == null){
      webStorage.setItem(this.props.webstorage,JSON.stringify(new Array(this.state)));
    } else {
      //console.dir(courses);
      courses.push(this.state);
      webStorage.setItem(this.props.webstorage,JSON.stringify(courses));
    }
  }

  optionTraningMode(trainingMode) {
    if(trainingMode == '') {
      return (
        <select value={this.state.trainingMode} onChange={this.setTraningMode}>
          <option value=""></option>
          <option value="VCR">VCR</option>
          <option value="CR">CR</option>
        </select>
      );
    } else {
      return (
        <select value={this.state.trainingMode} onChange={this.setTraningMode}>
          <option value="VCR">VCR</option>
          <option value="CR">CR</option>
        </select>
      );
    }
  }

  optionCourseOffered(trainingMode, courseOffered) {
    //var options = null;
    if(trainingMode == 'VCR') {
      //options = <option value="HTML">Course 1: HTML</option><option value="CSS">Course 2: CSS</option><option value="JS">Course 3: JS</option>;
      if(courseOffered == '') {
        return (
          <select value={this.state.courseOffered} onChange={this.setCourseOffered}>
            <option value=""></option>
            <option value="HTML">Course 1: HTML</option>
            <option value="CSS">Course 2: CSS</option>
            <option value="JS">Course 3: JS</option>
          </select>
        );
      } else {
        return (
          <select value={this.state.courseOffered} onChange={this.setCourseOffered}>
            <option value="HTML">Course 1: HTML</option>
            <option value="CSS">Course 2: CSS</option>
            <option value="JS">Course 3: JS</option>
          </select>
        );
      }
    } else if(trainingMode == 'CR') {
      //options = <option value="AngularJS">Course 1: AngularJS</option><option value="BackboneJS">Course 2: BackboneJS</option>;
      if(courseOffered == '') {
        return (
          <select value={this.state.courseOffered} onChange={this.setCourseOffered}>
            <option value=""></option>
            <option value="AngularJS">Course 1: AngularJS</option>
            <option value="BackboneJS">Course 2: BackboneJS</option>
          </select>
        );
      } else {
        return (
          <select value={this.state.courseOffered} onChange={this.setCourseOffered}>
            <option value="AngularJS">Course 1: AngularJS</option>
            <option value="BackboneJS">Course 2: BackboneJS</option>
          </select>
        );
      }
    }
    return (
      <select value={this.state.courseOffered} onChange={this.setCourseOffered}>
        <option value=""></option>
      </select>
    );
  }

  render() {
      return (
      <div>
        <h2 className='title'>
          Course Registration
        </h2>
        <table>
          <tbody>
          <tr>
            <td>Name: </td>
            <td><input type='text' value={this.state.name} onChange={this.setName} /> </td>
          </tr>
          <tr>
            <td>Gender: </td>
            <td>
              <input type='radio' name='gender' value='Male' checked={ this.state.gender == 'Male' } onChange={this.setGender} />Male
              <input type='radio' name='gender' value='Female' checked={ this.state.gender != 'Male'} onChange={this.setGender}  />Female
            </td>
          </tr>
          <tr>
            <td>Contact Number: </td>
            <td> <input type='text' value={this.state.contentNumber} onChange={this.setNumber} /></td>
          </tr>
          <tr>
            <td>Training Mode: </td>
            <td>
              {this.optionTraningMode(this.state.trainingMode)}
            </td>
          </tr>
          <tr>
            <td>Course Offered: </td>
            <td>{this.optionCourseOffered(this.state.trainingMode, this.state.courseOffered)} </td>
          </tr>
          </tbody>
        </table>
        <button onClick={this.SubmitCourse}>submit</button>
      </div>
      );
  }
}

export default Registration;
