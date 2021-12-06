import React, { useEffect, useState } from "react";
import axios from "axios";
import { add } from "./../../reducers/task";
import { logout } from "./../../reducers/login";
import { useDispatch, useSelector } from "react-redux";

function Task() {
  const dispatch = useDispatch();

  const state = useSelector((state) => {
    console.log("state", state);
    return state;
  });

  const getTasksAdmin = async () => {
    try {
      const tasks = await axios.get(
        `${process.env.REACT_APP_BASIC_URL}/alltasks`,
        { headers: { Authorization: `Bearer ${state.signIn.token}` } }
      );
      const data = {
        name: tasks.data,
      };
      dispatch(add(data));
    } catch (error) {
      console.log(error);
    }
  };

  const deletetask = async (taskId,i) => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_BASIC_URL}/taskadmin/${taskId}`,
        {
          headers: {
            Authorization: `Bearer ${state.signIn.token}`,
          },
        }
      );
      let tasks = [...state.tasks];
      tasks.splice(i, 1);
      const data = {
        name: tasks,
      };
      dispatch(add(data));
    } catch (error) {
      console.log(error);
    }
  };
  const out = () => {
    dispatch(logout({ role: "", token: "" }));
    dispatch(add({ name: [] }));
  };

  useEffect(() => {
    getTasksAdmin();
  }, []);

  return (
    <div>
      {state.tasks.map((item,i) => {
        console.log("item", item);
        return (
          <div key={item._id}>
            <h1>{item.name}</h1>
            <button onClick={() => deletetask(item._id,i)}>delete</button>
          </div>
        );
      })}
      <button onClick={out}>LogOut</button>
    </div>
  );
}

export default Task;
