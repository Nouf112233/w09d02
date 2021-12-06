import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Register from "./components/Register";
import SignIn from "./components/SignIn";
import Account from "./components/Account";
import Tasks from "./components/tasks";
import Task from "./components/Task";
// import axios from "axios";
import "./App.css";
import { useSelector } from "react-redux";

function App() {
  const state = useSelector((state) => {
    console.log("state", state);
    return state;
  });

  return (
    <>
      {!state.signIn.token ? (
        <Account />
      ) : state.signIn.role == "user" ? (
        <Tasks />
      ) : (
        state.signIn.role == "admin" && <Task />
      )}

      <Routes>
        <Route exact path="/tasks" element={<Tasks />} />
        <Route exact path="/task" element={<Task />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/signin" element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App;
