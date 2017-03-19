import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Registration from './Registration';
import Summary from './Summary';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {isShowRegister: true};

    this.handViewChangeRe = this.handViewChangeRe.bind(this);
    this.handViewChangeSu = this.handViewChangeSu.bind(this);
  }

  handViewChangeRe() {
    console.log(true);
    this.setState({isShowRegister : true});
  }

  handViewChangeSu() {
    console.log(false);
    this.setState({isShowRegister : false});
  }

  render() {
    //var register =

    return (
      <div className='appContent'>
          <div className='topNav'>
            <div className='navLeft'><a href="#" onClick={this.handViewChangeRe}>Register</a></div>
            <div className='navRight'><a href="#" onClick={this.handViewChangeSu}>View Registions</a></div>
          </div>
          <div className='content'>
            {this.state.isShowRegister ? <Registration /> : <Summary />}
          </div>
      </div>
    );
  }
}

export default App;
