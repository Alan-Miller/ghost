const initialStore = {
  ghost: '___'
}

const SET_GHOST = 'SET_GHOST';

export function setGhost(ghost) {
  return {
    type: SET_GHOST,
    payload: ghost
  }
}

export default function reducer(state = initialStore, action) {
  if (action.type === SET_GHOST) return Object.assign({}, state, { ghost: action.payload });
  else return state;
}