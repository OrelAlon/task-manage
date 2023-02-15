import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import TaskReducer from "../features/task/taskSlice";

export const store = configureStore({
  reducer: {
    task: TaskReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("taskState", JSON.stringify(state.task));
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
