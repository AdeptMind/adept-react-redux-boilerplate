import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Paper } from 'react-md';

import './home.css';

const Home = ( props ) => (
  <Paper className="adept-home-page">
    <h2>Adeptmind&quot;s Frontend Boilerplate</h2>
    <h3>Editing:</h3>
    <p>To start off the project, take a look at </p><pre>./src/containers/app/index.js</pre>
    <h3>Includes:</h3>
    <ul>
      <li>React</li>
      <li>Redux</li>
      <li>Redux-Thunk</li>
      <li>Boostrap</li>
      <li>Sass as a CSS prepreocessor</li>
      <li>Ducks Folder Structure Pattern</li>
      <li>Dotenv (see src/config/config.js and you need to create a .env file at root)</li>
    </ul>
  </Paper>
);

class HomeContainer extends Component{

  render(){
    return (
      <Home />
    );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
