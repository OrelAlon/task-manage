import GlobalStyles from "./components/styles/Global";
import { Wrapper } from "./components/styles/Wrapper.styled";

import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

import "./App.css";

function App() {
  return (
    <>
      <GlobalStyles />

      <Wrapper>
        <AddTask />
        <TaskList />
      </Wrapper>
    </>
  );
}

export default App;
