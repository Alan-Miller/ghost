import React from 'react';

export default function Introduction(props) {
  return (
    <h1>Meet {props.match.params.ghost || '___'} the Ghost</h1>
  )
}