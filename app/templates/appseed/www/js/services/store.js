import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';

const initialState = {
  markers: [],
  thing: 0,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_MARKERS':
      state = Object.assign({}, state, {
        markers: action.payload
      }); // state = {...state, markers: action.payload }
      break;
    case 'UPDATE_SOMETHING':
      state = Object.assign({}, state, {
        thing: action.payload
      });
      break;
      /*--NEW CASES BELOW HERE-----*/

    default:
      return state;
  }
  return state;
};
/******************************
    this.state = store.getState(); // get initial state
    store.subscribe(()=>{
        this.setState(store.getState());
    }); // get new state when available

    store.dispatch({
        type: "GET_MARKERS",
        payload: {},
    });
********************************/




if (process.env.NODE_ENV === 'production') {
  module.exports = createStore(reducer);
} else {
  console.log('......Using Dev Store........');
  const middleware = applyMiddleware(createLogger());
  module.exports = createStore(reducer, middleware);
}