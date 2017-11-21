import React, { Component } from 'react';
import { connect } from 'react-redux';


const Home = ( props ) => (
  <div>
    <h2>Adeptmind's Frontend Boilerplate</h2>
    <h3>Editing:</h3>
    <p>To start off the project, take a look at <pre>./src/containers/app/index.js</pre></p>
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
  </div>
);

class HomeContainer extends Component{

  render(){
    return (
      <Home />
    )
  }

}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);