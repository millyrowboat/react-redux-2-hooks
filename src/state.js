import React, { createContext, useContext, useReducer } from 'react';

const initialState = {
  text: 'I am an eggplant'
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'changeText':
      return {
        ...state,
        text: action.text
      };
    default:
      return state;
  }
};

const StateContext = createContext();

const StateProvider = ({ children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

const useGetState = () => useStateValue()[0];
const useDispatch = () => useStateValue()[1];

const useStateValue = () => useContext(StateContext);

export { StateProvider, useGetState, useDispatch };
