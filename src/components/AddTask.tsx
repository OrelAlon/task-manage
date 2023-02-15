import { useDispatch } from "react-redux";
import { useState } from "react";
import { addTask } from "../features/task/taskSlice";
import { nanoid } from "@reduxjs/toolkit";
import { VscDiffAdded } from "react-icons/vsc";

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
      <VscDiffAdded onClick={handleAddTask} size={34} />
    </div>
  );
};

export default AddTask;
