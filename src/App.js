import React, { useState, useEffect } from "react";
import api from "./api";
import "./App.css";

export default function App() {
  const [catState, setCatState] = useState([]);

  const update = () => {
    api
      .get("")
      .then((response) => {
        setCatState(response.data[0].url);
      })
      .catch((err) => {
        console.log("error");
      });
  };

  useEffect(() => {
    update();
  }, []);

  return (
    <div className='container'>
      <div className='box'>
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title'>Cat Random</h5>
            <p className='card-text'>
              Click on the button and see a cute kitten.
            </p>
            <button onClick={update} type='button' class='btn btn-info'>
              Random
            </button>
          </div>
        </div>
        <img src={catState} className='card-img-top' alt='...' />
      </div>
    </div>
  );
}
