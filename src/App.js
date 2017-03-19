import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import registration from './registration';
import summary from './summary';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {isShowRegister: true};

    this.handViewChangeRe = this.handViewChangeRe.bind(this);
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
    return (
      <div className='appContent'>
          <div className='topNav'>
            <div className='navLeft'><a href="#" onClick="{handViewChangeRe}">Register</a></div>
            <div className='navRight'><a href="#" onClick="{handViewChangeSu}">View Registions</a></div>
          </div>
          <div>
            {this.state.isShowRegister ? <registration /> : <summary />}
          </div>
      </div>
    );
  }
}

export default App;
