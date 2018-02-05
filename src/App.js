import React, { Component } from 'react';
import Header from './components/Header';
import Ghost from './components/Ghost';
import { connect } from 'react-redux';
import { setGhost } from './redux/reducer';
import axios from 'axios';

class App extends Component {
  componentWillMount() {
    axios.get('/api/ghost').then(ghost => (
      this.props.setGhost(ghost.data.ghost_name)
    ))
  }
  render() {
    return (
      <div className="App">
        <Header />
        <h1>Meet {this.props.ghost} the Ghost</h1>
        <div className="dashedBorder">
          <Ghost ghost_name={this.props.ghost} />
        </div>
      </div>
    );
  }
}

export default connect(state => state, { setGhost })(App);