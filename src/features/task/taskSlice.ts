import { createSlice } from "@reduxjs/toolkit";

interface Task {
  id: string;
  value: string;
  open: boolean;
}

interface TaskState {
  tasks: Task[];
}

const initialState: TaskState = {
  tasks: [],
};

export const taskSlice = createSlice({
  name: " task",
  initialState,
  reducers: {},
});

export default taskSlice.reducer;
