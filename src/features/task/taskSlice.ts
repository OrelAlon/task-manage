import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Task {
  id: string;
  value: string;
  open: boolean;
}

interface TaskState {
  tasks: Task[];
}

// Check if there is saved data in localStorage
const savedTasks = localStorage.getItem("tasks");
const initialState: TaskState = {
  tasks: savedTasks ? JSON.parse(savedTasks) : [],
};

export const taskSlice = createSlice({
  name: " task",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
      // Save the new state to localStorage
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    updateTask: (
      state,
      action: PayloadAction<{ id: string; changes: Partial<Task> }>
    ) => {
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );
      if (index !== -1) {
        state.tasks[index] = {
          ...state.tasks[index],
          ...action.payload.changes,
        };
        // Save the new state to localStorage
        localStorage.setItem("tasks", JSON.stringify(state.tasks));
      }
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      const index = state.tasks.findIndex((task) => task.id === action.payload);
      if (index !== -1) {
        state.tasks.splice(index, 1);
        // Save the new state to localStorage
        localStorage.setItem("tasks", JSON.stringify(state.tasks));
      }
    },
  },
});

export const { addTask, updateTask, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;
