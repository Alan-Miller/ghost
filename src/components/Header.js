import React from 'react';
import Ghost from '../components/Ghost';
import { setGhost } from '../redux/reducer';
import { connect } from 'react-redux';
import axios from 'axios';

function Header(props) {

  function editGhost(ghost_name) {
    axios.put('/api/ghost', { ghost: ghost_name }).then(ghost => {
      console.log("ghost", ghost);
      props.setGhost(ghost.data.ghost_name)
    })
    // props.setGhost(ghost_name)
  }

  return (
    <section className="Header">
      {["Blinky", "Pinky", "Inky", "Clyde", "___"].map(ghost_name => (
        <div key={ghost_name} onClick={() => editGhost(ghost_name)}>
          <Ghost ghost_name={ghost_name} />
        </div>
      ))}
    </section>
  )
}

export default connect(null, { setGhost: setGhost })(Header);