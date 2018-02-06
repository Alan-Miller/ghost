import React from 'react';

function Ghost(props) {
  return (
    <section className={`Ghost ${props.ghost_name}`}>
      <div className="left eye"></div>
      <div className="right eye"></div>
    </section>
  )
}

export default Ghost;