import { toggleView } from '../actions'

const posts = (state = {}, action) => {
  switch (action.type) {
    case 'TOGGLE_VIEW':
      return toggleView(state);
  }
  return state;
}

export default posts