import React from 'react';
import Header from './components/Header';
import Ghost from './components/Ghost';
import { connect } from 'react-redux';
import axios from 'axios';
import { setGhost } from './redux/reducer';

class App extends React.Component {

  componentWillMount() {
    axios.get('/api/ghost').then(ghost => {
      this.props.setGhost(ghost.data.ghost_name)
    })
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
    )
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, { setGhost: setGhost })(App);