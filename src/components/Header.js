import React from 'react';
import Ghost from '../components/Ghost';
import { connect } from 'react-redux';
import { setGhost } from '../redux/reducer';
import axios from 'axios';

function Header(props) {
  function editGhost(ghost_name) {
    axios.put('/api/ghost', { ghost_name }).then(ghost => (
      props.setGhost(ghost.data.ghost_name)
    ))
  }
  return (
    <section className="Header">

      {['Blinky', 'Pinky', 'Inky', 'Clyde'].map(ghost_name => (
        <div key={ghost_name} onClick={() => editGhost(ghost_name)}>
          <Ghost ghost_name={ghost_name} />
        </div>
      ))}
      
    </section>
  )
}

export default connect(null, { setGhost })(Header);