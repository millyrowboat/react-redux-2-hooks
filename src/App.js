import React from 'react';
import { useGetState, useDispatch } from './state';
import './App.css';

const Button = () => {
  const { text } = useGetState();
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch({ type: 'changeText', text: 'I am a button' })}
    >
      {text}
    </button>
  );
};

const Header = () => {
  const { text } = useGetState();

  return <header>{text}</header>;
};

const App = () => (
  <div className="App">
    <Header />
    <Button />
  </div>
);

export default App;
