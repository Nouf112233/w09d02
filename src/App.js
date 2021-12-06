import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Register from "./components/Register";
import SignIn from "./components/SignIn";
import Account from "./components/Account";
import Tasks from "./components/tasks";
// import axios from "axios";
import "./App.css";
import { useSelector } from "react-redux";

function App() {

const state =useSelector((state)=>{
  console.log("state",state);
      return state;
      
      
})

  return (
    <>
     
        <Account  />
     
      <Routes>
       <Route exact path="/tasks" element={<Tasks  />}
        <Route exact path="/task" element={<Task  />} /> */}
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/signin" element={<SignIn  />} />
        {/* <Route exact path="/logout" element={<LogOut setToken={setToken} />} /> */}
      </Routes>
    </>
  );
}

export default App;
