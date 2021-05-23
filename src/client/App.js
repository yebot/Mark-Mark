import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css'
import './app.css';
import MainContainer from './containers/MainContainer'; 
//import ReactImage from './react.png';

export default class App extends Component {
  render() {
    return (
      <MainContainer />
    );
  }
}