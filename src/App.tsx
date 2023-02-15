import { useSelector } from "react-redux";
import { RootState } from "./app/store";

import AddTask from "./components/AddTask";

import "./App.css";

function App() {
  const tasks = useSelector((state: RootState) => state.task.tasks);
  console.log(tasks);

  return (
    <div className='App'>
      Orel Code
      <AddTask />
    </div>
  );
}

export default App;
