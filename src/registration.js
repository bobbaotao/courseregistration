import React, { Component } from 'react';
import './App.css';
// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom';

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
  }

  setName(event) {
    console.log(event.target.value);
    this.setState({ name: event.target.value});
  }

  setGender(event) {
    console.log(event.target.value);
    this.setState({ gender: event.target.value});
  }

  setNumber(event) {
    console.log(event.target.value);
    this.setState({ contentNumber: event.target.value});
  }

  setTraningMode(event){
    console.log(event.target.value);
    this.setState({ trainingMode: event.target.value});
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

  optionCourseOffered() {
    
  }

  render() {
      return (
      <div>
        <h2 className='title'>
          Course Registration
        </h2>
        <table>
          <tr>
            <td>Name: </td>
            <td><input type='text' value={this.state.name} onChange={this.setName} /> </td>
          </tr>
          <tr>
            <td>Gender: </td>
            <td>
              <input type='radio' name='gender' value='Male' checked={ this.state.gender == 'Male' } onClick={this.setGender} />Male
              <input type='radio' name='gender' value='Female' checked={ this.state.gender != 'Male'} onClick={this.setGender}  />Female
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
            <td> </td>
          </tr>
        </table>
      </div>
      );
  }
}

export default Registration;
