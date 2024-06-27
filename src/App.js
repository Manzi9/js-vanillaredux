import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  return (
    <>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
      >
        increment
      </button>

      <button
        onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}
      >
        decrement
      </button>

      <p>{count}</p>
    </>
  );
};

export default App;
