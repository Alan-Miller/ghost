import React from 'react'
import { connect } from 'react-redux';
import { setGhost } from '../redux/reducer';

function Ghost(props) {
  return (

    <div className={`Ghost ${props.ghost_name}`}>
      <div className="left eye"></div>
      <div className="right eye"></div>
    </div>
  )
}

export default connect(state => state, { setGhost })(Ghost);