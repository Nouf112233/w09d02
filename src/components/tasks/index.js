import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";


const Tasks = () => {

    const state =useSelector((state)=>{
        console.log("state",state);
            return state;  
      })
  
    const [taskUser, setTaskUser] = useState([]);
  const [taskName, setTaskname] = useState("");
  const [taskadd, setTaskadd] = useState("");


  const getTasks = async () => {
    
    try {
      const tasks = await axios.get(
        `${process.env.REACT_APP_BASIC_URL}/tasks`,
        { headers: { Authorization: `Bearer ${state.signIn.token}` } }
      );
        // console.log("tasks", tasks.data);
      setTaskUser(tasks.data);
     

    } catch (error) {
      console.log(error);
    }
  };



  const deletetask = async (taskId) => {
    try {
      const result = await axios.delete(
        `${process.env.REACT_APP_BASIC_URL}/task`,
        {taskId },
        { headers: { Authorization: `Bearer ${state.signIn.token}` } }
      );
    //   setUp(!up);
    } catch (error) {
      console.log(error);
    }
  };

  const updatetask = (_id) => {
    if (taskName.length > 0) {
      axios.put(
        `${process.env.REACT_APP_BASIC_URL}/task`,
        { taskId: _id, taskName: taskName },
        { headers: { Authorization: `Bearer ${state.signIn.token}` } }
      );
    }
    setTaskname("");
  
  };

  const createTask = () => {
      console.log("taskadd",taskadd);
    if (taskadd.length > 0) {
      axios.post(
        `${process.env.REACT_APP_BASIC_URL}/create`,
        { name: taskadd },
        { headers: { Authorization: `Bearer ${state.signIn.token}` } }
      );
    }
    setTaskadd("");

  };

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
    
       { taskUser.map((item) => {
          console.log("item", item);
          return (
            <div key={item._id}>
              <h1>{item.name}</h1>
              <button onClick={() => deletetask(item._id)}>delete</button>
              <input
                type="text"
                value={taskName}
                onChange={(e) => {
                  setTaskname(e.target.value);
                }}
              />
              <button onClick={() => updatetask(item._id)}>update</button>
            </div>
          )})}
            
       
    </div>
  )
            };
        


export default Tasks;