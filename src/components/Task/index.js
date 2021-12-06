import React from 'react'
import axios from 'axios';
import { useSelector } from "react-redux";

function Task() {

    const state =useSelector((state)=>{
        console.log("state",state);
            return state;  
      })

    const getTasksAdmin = async (toke) => {
        try {
          const tasks = await axios.get(
            `${process.env.REACT_APP_BASIC_URL}/alltasks`,
            { headers: { Authorization: `Bearer ${state.signIn.token}` } }
          );
        //   console.log("tasksadmin", tasks.data);
        //   setTaskAdmin(tasks.data);
    
        } catch (error) {
            console.log(error);
            }
          };
           // if error and user is not admin get task for user
         
      

    const deletetask = async (taskId) => {
        try {
          const result = await axios.delete(
            `${process.env.REACT_APP_BASIC_URL}/taskadmin`,
            { data: { taskId } },
            { headers: { Authorization: `Bearer ${state.signIn.token}` } }
          );
        //   setUp(!up);
        } catch (error) {
          console.log(error);
        }
      };
    return (
        <div>
           {/* { taskAdmin.map((item) => {
          console.log("item", item);
          return (
            <div key={item._id}>
              <h1>{item.name}</h1>
              <button onClick={() => deletetask(item._id)}>delete</button>

            </div>
          )})} */}
            
        </div>
    )
}

export default Task