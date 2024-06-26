import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";

const App = () => {
  return (
    <>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <p>{count}</p>
    </>
  );
};

export default App;
