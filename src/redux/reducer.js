const initialState = {
  ghost: "___"
}

const SET_GHOST = 'SET_GHOST';

export function setGhost(ghost) {
  return {
    type: SET_GHOST,
    payload: ghost
  }
}

export default function reducer(state = initialState, action) {
  // if (action.type === SET_GHOST) return Object.assign({}, state, { ghost: action.payload });
  // else return state;
  // console.log("GHOST IS", state.ghost)
  switch (action.type) {
    case SET_GHOST:
      return Object.assign({}, state, { ghost: action.payload });
    default:
      return state;
  }
}