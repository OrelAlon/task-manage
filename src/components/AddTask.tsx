import { useDispatch } from "react-redux";
import { useState } from "react";
import { addTask } from "../features/task/taskSlice";
import { nanoid } from "@reduxjs/toolkit";

const AddTask = () => {
  const dispatch = useDispatch();
  const [taskName, setTaskName] = useState("");

  const handleAddTask = () => {
    if (taskName) {
      dispatch(addTask({ id: nanoid(), value: taskName, open: true }));
      setTaskName("");
    }
  };

  return (
    <div>
      <input
        type='text'
        placeholder='What need to be done ?'
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button onClick={handleAddTask}>+</button>
    </div>
  );
};

export default AddTask;
