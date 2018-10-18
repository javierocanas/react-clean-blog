import constants from '../constants';

export const toggleView = (state) => {
  const newState = Object.assign({}, state)
  newState.gridView = !newState.gridView

  return newState;
}

export const CurrentState = {
  TOGGLE_VIEW: constants.TOGGLE_VIEW,
}
