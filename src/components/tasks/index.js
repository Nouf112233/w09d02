import React, { useEffect, useState } from "react";
import axios from "axios";
import { add } from "./../../reducers/task";
import {logout} from "./../../reducers/login"
import { useDispatch, useSelector } from "react-redux";

const Tasks = () => {
  const dispatch = useDispatch();

  const state = useSelector((state) => {
    console.log("state.signIn.token", state.signIn.token);
    console.log("state.tasks", state.tasks);
    return state;
  });

  const [taskName, setTaskname] = useState("");
  const [taskadd, setTaskadd] = useState("");

  const getTasks = async () => {
    try {
      const tasks = await axios.get(
        `${process.env.REACT_APP_BASIC_URL}/tasks`,
        { headers: { Authorization: `Bearer ${state.signIn.token}` } }
      );
      // console.log("tasks", tasks.data);
      
      const data = {
        name: tasks.data,
      };
      dispatch(add(data));
    } catch (error) {
      console.log(error);
    }
  };

  const deletetask = async (taskId, i) => {

    try {
        await axios.delete(`${process.env.REACT_APP_BASIC_URL}/task/${taskId}`, {
          headers: {
            Authorization: `Bearer ${state.signIn.token}`,
          },
        });
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

  const updatetask = (_id, i) => {
    if (taskName.length > 0) {
      axios.put(
        `${process.env.REACT_APP_BASIC_URL}/task`,
        { taskId: _id, taskName: taskName },
        { headers: { Authorization: `Bearer ${state.signIn.token}` } }
      );
    }
   
    setTaskname("");
    getTasks();
  };

  const createTask = () => {
    console.log("taskadd", taskadd);
    if (taskadd.length > 0) {
      axios.post(
        `${process.env.REACT_APP_BASIC_URL}/create`,
        { name: taskadd },
        { headers: { Authorization: `Bearer ${state.signIn.token}` } }
      );
    }
    let tasks = [...state.tasks];
      tasks.push(taskadd);
      const data = {
        name: tasks,
      };
      dispatch(add(data));
    setTaskadd("");
    
  };

  const out=()=>{
    dispatch(logout({role:"",token:""}));
    dispatch(add({name:[]}));

  }

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div>
      <input
        type="text"
        value={taskadd}
        onChange={(e) => {
          setTaskadd(e.target.value);
        }}
      />
      <button onClick={createTask}>add task</button>

      {state.tasks.map((item, i) => {
        console.log("item", item);
        return (
          <div key={item._id}>
            <h1>{item.name}</h1>
            <button onClick={() => deletetask(item._id, i)}>delete</button>
            <input
              type="text"
            //   value={taskName}
              onChange={(e) => {
                setTaskname(e.target.value);
              }}
            />
            <button onClick={() => updatetask(item._id, i)}>update</button>
          </div>
        );
      })}
      <button onClick={out}>LogOut</button>
    </div>
  );
};

export default Tasks;
